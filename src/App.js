import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Routes from 'routes';
import themes from 'themes';
import NavigationScroll from 'layout/NavigationScroll';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes({})}>
        <Provider store={store}>
          <CssBaseline />
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
