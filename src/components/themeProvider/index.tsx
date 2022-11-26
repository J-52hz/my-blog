// styles/index.tsx 文件
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import light from './light';
import dark from './dark';
import { Theme } from '@/types';
import { RootState } from 'src/store';

const ThemeProviderWrapper = (props: any) => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return <ThemeProvider theme={theme === Theme.Dark ? dark : light} {...props} />;
};

export default ThemeProviderWrapper;
