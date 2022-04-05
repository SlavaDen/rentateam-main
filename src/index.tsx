import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.scss';
import store from 'store/';
import OrderProvider from './context/OrderContext';
import { ThemeProvider } from '@mui/material';
import theme from './muiTheme';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <OrderProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </OrderProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)