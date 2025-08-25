import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss"
import { MainPageAsync } from "./components/pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./components/pages/AboutPage/AboutPage.async";
import { Suspense, useContext, useState } from "react";
import { ThemeContext } from "./styles/theme/ThemeContext";
import useTheme from "./styles/theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";
export enum Theme {
  LIGHT = "light",
  DARK = "dark"
}
const App = () => {

const { theme, toggleTheme } = useTheme();


  return (
    <div className={classNames('app', { hovered:true, selected:false}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">Main Page</Link>
      <Link to="/about">About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;