import Layout from '@/components/layout';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import { ThemeProvider } from 'styled-components';

function App() {
  const outlet = useRoutes(routes);
  const theme = {
    main: '#0066FF',
    light: '#E5EFFF'
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout>{outlet}</Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
