import { useState, useEffect } from 'react';
// import { ref } from 'vue-demi'
// import type { Fn, Pausable } from '@vueuse/shared'
// import { tryOnScopeDispose } from '@vueuse/shared'
// import type { ConfigurableWindow } from '../_configurable'
// import { defaultWindow } from '../_configurable'
const isClient = typeof window !== undefined;
// const defaultWindow = /* #__PURE__ */ isClient ? window : undefined

export interface UseRafFnOptions {
  /**
   * Start the requestAnimationFrame loop immediately on creation
   *
   * @default true
   */
  immediate?: boolean;
  window?: Window;
}

/**
 * Call function on every `requestAnimationFrame`. With controls of pausing and resuming.
 *
 * @see https://vueuse.org/useRafFn
 * @param fn
 * @param options
 */

type Fn = () => void;
interface Pausable {
  isActive: boolean;
  pause: () => void;
  resume: () => void;
}

export function useRafFn(fn: Fn, options: UseRafFnOptions = {}): Pausable {
  const { immediate = true, window } = options;

  // const isActive = ref(false)
  const [isActive, setIsActive] = useState(false);
  let rafId: null | number = null;

  function loop() {
    if (!isActive || !window) return;

    fn();
    rafId = window.requestAnimationFrame(loop);
  }

  function resume() {
    if (!isActive && window) {
      setIsActive(true);
      loop();
    }
  }

  function pause() {
    setIsActive(false);
    if (rafId !== null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  if (immediate) resume();

  // tryOnScopeDispose(pause)

  return {
    isActive,
    pause,
    resume
  };
}
