// styles/GlobalStyle.ts 文件
import { createGlobalStyle } from 'styled-components';

const MarkDownStyle = createGlobalStyle`
  article{
    /* color:${(props: any) => props.theme.colors.mk_color}; */
      color:${(props: any) => props.theme.colors.mk_color};
      h1,h2,h3,strong{
        color:${(props: any) => props.theme.colors.strong_color};
      }
  }
`;

export default MarkDownStyle;
