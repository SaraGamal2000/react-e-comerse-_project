import "./App.css";
import AppRoute from "./Routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import LanguageContext from "./context/Language";
import ThemeContext from "./context/Theme_C";
import store from "./Store/Store";
import { Provider } from "react-redux";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <LanguageContext.Provider value={{ language, setLanguage }}>
            <div dir={language === "en" ? "ltr" : "rtl"}>
              <AppRoute />
            </div>
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </Provider>
    </>
  );
}

export default App;
