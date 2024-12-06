import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

 const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
 };
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => useContext(ThemeContext);



// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext(undefined);

// export const ThemeProvider = ({ children }) => {
//  const [theme, setTheme] = useState("light");

//  return (
//    <ThemeContext.Provider
//      value={{
//        theme,
//        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
//      }}
//    >
//      {children}
//    </ThemeContext.Provider>
//  );
// };