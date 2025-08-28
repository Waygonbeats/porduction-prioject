

import { BrowserRouter } from 'react-router-dom';
import App, { Theme } from './app/App';
import { render } from 'react-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';



render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
