

import { BrowserRouter } from 'react-router-dom';
import App, { Theme } from './App';
import { render } from 'react-dom';
import ThemeProvider from './styles/theme/ThemeProvider';


render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
