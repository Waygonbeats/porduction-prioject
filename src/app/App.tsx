import { classNames } from 'shared/lib/classNames';
import { Suspense, useEffect } from 'react';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  /*   useEffect(() => {
    if (Math.random() > 0.5) {
      throw Error()
    }
  }, []); */

  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [theme])}
    >

      <Suspense fallback={''}>   
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
