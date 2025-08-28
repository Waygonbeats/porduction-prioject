import { classNames } from "shared/lib/classNames";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss"
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {

const { theme } = useTheme();


  return (
    <div className={classNames('app', { hovered:true, selected:false}, [theme])}>
      <Navbar />
      <AppRouter />
  
    </div>
  );
};
export default App;