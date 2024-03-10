import { createContext ,useContext, useState } from "react"
import * as React from 'react';
import Switch, { switchClasses } from '@mui/material/Switch';


export const ThemeContext = createContext('light')

export const ThemeContextProvider = ({children}) =>{
    const [theme, setTheme] = useState('light')
    const switchTheme= () => {
        setTheme(theme==='light' ? 'dark': 'light')
        console.log('Theme is ',theme)
    }

return (
    <ThemeContext.Provider value={theme}>
      <Switch defaultChecked onClick={switchTheme} />
      {children}
    </ThemeContext.Provider>
  );
}
const Switcher = () => {
  return <ThemeContextProvider />;
}; 

export default Switcher


