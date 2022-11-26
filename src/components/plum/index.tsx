import React, { memo, useRef, useEffect, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
// import { useRafFn } from '../../utils/useRafFn'
import { CanvasWrapBox } from './style';

const Plum = memo(function Decorate(props: any) {
  type Fn = () => void;

  const size = useWindowSize();
  const el = useRef<HTMLCanvasElement | null>(null);

  const r180 = Math.PI;
  const r90 = Math.PI / 2;
  const r15 = Math.PI / 12;
  const color = '#88888825';

  const { random } = Math;

  // const [start, setStart] = useState<Fn>(() => {})
  const [init, setInit] = useState(4);
  const [len, setLen] = useState(7);

  function initCanvas(canvas: HTMLCanvasElement, width = 200, height = 200, _dpi?: number) {
    const ctx = canvas.getContext('2d')!;

    const dpr = window.devicePixelRatio || 1;
    const bsr =
      // @ts-expect-error vendor
      ctx.webkitBackingStorePixelRatio ||
      // @ts-expect-error vendor
      ctx.mozBackingStorePixelRatio ||
      // @ts-expect-error vendor
      ctx.msBackingStorePixelRatio ||
      // @ts-expect-error vendor
      ctx.oBackingStorePixelRatio ||
      // @ts-expect-error vendor
      ctx.backingStorePixelRatio ||
      1;

    const dpi = _dpi || dpr / bsr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.width = dpi * width;
    canvas.height = dpi * height;
    ctx.scale(dpi, dpi);

    return { ctx, dpi };
  }

  function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
    const dx = r * Math.cos(theta);
    const dy = r * Math.sin(theta);
    return [x + dx, y + dy];
  }

  useEffect(() => {
    if (size.width !== 0 && size.height !== 0) {
      const canvas = el.current!;
      const { ctx } = initCanvas(canvas, size.width, size.height);
      const { width, height } = canvas;

      let steps: Fn[] = [];
      let prevSteps: Fn[] = [];

      let iterations = 0;

      const step = (x: number, y: number, rad: number) => {
        const length = random() * len;

        const [nx, ny] = polar2cart(x, y, length, rad);

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        const rad1 = rad + random() * r15;
        const rad2 = rad - random() * r15;

        if (nx < -100 || nx > size.width + 100 || ny < -100 || ny > size.height + 100) return;

        if (iterations <= init || random() > 0.5) steps.push(() => step(nx, ny, rad1));
        if (iterations <= init || random() > 0.5) steps.push(() => step(nx, ny, rad2));
      };

      let lastTime = performance.now();
      const interval = 1000 / 40;

      const frame = () => {
        if (performance.now() - lastTime < interval) return;

        iterations += 1;
        prevSteps = steps;
        steps = [];
        lastTime = performance.now();

        prevSteps.forEach((i) => i());
      };

      const setFrame = () => {
        iterations = 0;
        ctx.clearRect(0, 0, width, height);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        prevSteps = [];
        steps = [
          () => step(random() * size.width, 0, r90),
          () => step(random() * size.width, size.height, -r90),
          () => step(0, random() * size.height, 0),
          () => step(size.width, random() * size.height, r180)
        ];
        if (size.width < 500) steps = steps.slice(0, 2);
      };
      setFrame();

      const startFrame = () => {
        window.requestAnimationFrame(() => {
          frame();
          startFrame();
        });
      };
      startFrame();
    }
  });

  return (
    <CanvasWrapBox>
      <canvas ref={el} width="200" height="200"></canvas>
    </CanvasWrapBox>
  );
});

export default Plum;
