import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import User from './components/user/User';

function App() {
  return (
    <div className="App">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1>Hey react</h1> */}
        <User/>
        
    </div>
  );
}

export default App;
