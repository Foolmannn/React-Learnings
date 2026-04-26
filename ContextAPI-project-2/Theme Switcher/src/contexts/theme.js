// this is another method to use the context . Here we are doing most of it is one file 

import { createContext,useContext } from "react";

export const ThemeContext= createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}