import {createContext, ReactNode, useContext, useState } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};
export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({children}:{children:ReactNode}) =>{
    const [theme, setTheme] = useState<"light" | "dark">("light");
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=>{
    return useContext(ThemeContext);
}
