import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage.js';
import RegisterPage from './components/RegisterPage/RegisterPage.js';
import HomePage from './components/HomePage/HomePage.js';
import CassettePage from './components/CassettePage/CassettePage';
import SettingPage from './components/SettingPage/SettingPage.js';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/Login" element={<LoginPage/>}/>
          <Route path="/Register" element={<RegisterPage/>}/>
          <Route exact path="/Home" element={<HomePage/>}/>
          <Route exact path="/CassettePage" element={<CassettePage/>}/>
          <Route exact path="/Settings" element={<SettingPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
