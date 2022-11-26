import styled from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';
import { useEffect, useState } from 'react';

const LayoutContainer = styled.section<{ isPc: boolean }>`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: ${(props) => (props.isPc ? 6 : 0)}px;
  }
`;
const Main = styled.main`
  padding: 2.5rem 1.75rem;
  margin: auto;
`;

interface MainPage {
  children: React.ReactNode;
}

const Layout: React.FC<MainPage> = (props: MainPage) => {
  const { children } = props;
  const [isPc, setIsPc] = useState<boolean>();

  useEffect(() => {
    let plat = navigator.userAgent.match(
      // 判断不同端
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    plat ? setIsPc(false) : setIsPc(true);
  }, []);

  return (
    <LayoutContainer isPc={isPc!}>
      <NavBar></NavBar>
      <Main>{children}</Main>
      <Footer></Footer>
    </LayoutContainer>
  );
};

export default Layout;
