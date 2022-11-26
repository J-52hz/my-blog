// styles/GlobalStyle.ts 文件
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props: any) => props.theme.colors.body};
    color:${(props: any) => props.theme.colors.color};
    font-family:Inter
  }
`;

export default GlobalStyle;
