import logo from './logo.svg';
import './App.css';
import Login from "./components/login";
import SymptomForm from "./components/symptom-form";
import Results from "./components/results";
import NavBar from "./components/navbar";
import {useState} from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const loginSuccess = () => {
    setIsLoggedIn(true);
  }

  const searchResults = () => {
    setIsSearchClicked(true);
  }

  return (
    <div className="App">
        {isLoggedIn ? <NavBar />: null}
        {!isLoggedIn ? (<Login isLoginSuccess={loginSuccess}/>): null}
        {(isLoggedIn && !isSearchClicked) ? (<SymptomForm isSearchClicked={searchResults} />): null}
        {isLoggedIn && isSearchClicked ? (<Results />): null}
    </div>
  );
}

export default App;
