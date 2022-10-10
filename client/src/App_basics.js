// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Splash from './components/Splash/Splash';
import Home from './components/Home/Home';
import Greeting from "./components/Greeting";
import UserGreeting from "./components/UserGreeting";
import Stateful from "./components/Stateful";



const App = () => {
  return (
    <div className="App">

      <Stateful />
      <Greeting />
      <UserGreeting />

      {/* <Router>        
        <Routes>
          <Route path='/' element={<Splash />} exact />
          <Route path='/home' element={<Home />} exact />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
