import './App.css'
import Switcher from './components/Switcher'
import { ThemeContextProvider, ThemeContext } from './components/Switcher';
function App() {
  
  return (
    <>
      <Switcher>
        <p>Test</p>
      </Switcher>
    </>
  )
}

export default App;
