import styled from 'styled-components';

// 编辑器样式
const ArticleContainer = styled.section`
  max-width: 65ch;
  margin: 0 auto;
  line-height: 1.75;
  opacity: 1;
  font-family: 'Inter';
  /* color: #555; */
  // 代码高亮主题配置
  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable.language_ {
    /* prettylights-syntax-keyword */
    color: #ff7b72;
  }

  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    /* prettylights-syntax-entity */
    color: #d2a8ff;
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-variable,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id {
    /* prettylights-syntax-constant */
    color: #79c0ff;
  }

  .hljs-regexp,
  .hljs-string,
  .hljs-meta .hljs-string {
    /* prettylights-syntax-string */
    color: #a5d6ff;
  }

  .hljs-built_in,
  .hljs-symbol {
    /* prettylights-syntax-variable */
    color: #ffa657;
  }

  .hljs-comment,
  .hljs-code,
  .hljs-formula {
    /* prettylights-syntax-comment */
    color: #8b949e;
  }

  .hljs-name,
  .hljs-quote,
  .hljs-selector-tag,
  .hljs-selector-pseudo {
    /* prettylights-syntax-entity-tag */
    color: #7ee787;
  }

  .hljs-subst {
    /* prettylights-syntax-storage-modifier-import */
    color: #c9d1d9;
  }

  .hljs-section {
    /* prettylights-syntax-markup-heading */
    color: #1f6feb;
    font-weight: bold;
  }

  .hljs-bullet {
    /* prettylights-syntax-markup-list */
    color: #f2cc60;
  }

  .hljs-emphasis {
    /* prettylights-syntax-markup-italic */
    color: #c9d1d9;
    font-style: italic;
  }

  .hljs-strong {
    /* prettylights-syntax-markup-bold */
    color: #c9d1d9;
    font-weight: bold;
  }

  .hljs-addition {
    /* prettylights-syntax-markup-inserted */
    color: #aff5b4;
    background-color: #033a16;
  }

  .hljs-deletion {
    /* prettylights-syntax-markup-deleted */
    color: #ffdcd7;
    background-color: #67060c;
  }

  h1 {
    font-weight: 800;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.8888889em;
    line-height: 1.1111111;
  }

  h2 {
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3333333;
  }
  h3 {
    font-weight: 600;
    font-size: 1.25em;
    margin-top: 1.6em;
    margin-bottom: 0.6em;
    line-height: 1.6;
  }
  p {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
  }
  blockquote {
    font-weight: 400;
    font-style: normal;
    line-height: 1.5em;
    padding: 0.6em 1.2em;
    opacity: 0.8;
  }
  code {
    word-break: break-word;
    border-radius: 2px;
    overflow-x: auto;
    color: #ff502c;
    padding: 0.065em 0.4em;
  }
  pre {
    width: 100%;
    font-size: 0.875rem;
    padding-left: 1rem;
    border-radius: 0.6rem;
    background: rgb(248, 248, 248);
    overflow: hidden;
    overflow-x: scroll;
    code::before {
      content: '';
    }
    code::after {
      content: '';
    }
  }
  li {
    list-style-type: disc;
  }
  a {
    background: transparent;
    text-decoration: solid;
    text-decoration-color: #000;
    border-bottom: 1px solid #000;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: inherit;
  }
`;

export { ArticleContainer };
