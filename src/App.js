import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from "./comp/Header"
import Dashboard from "./comp/Dashboard"
import Employees from "./comp/Employees"
import Appointments from "./comp/Appointments"
import Calender from "./comp/Calender"
import Messages from "./comp/Messages"
import Hello from "./comp/Hello"
import Footer from "./comp/Footer"
function App() {
  return (

    <Router>
    <div className="App">
      <Header/>
      <Hello/>
      <Switch>
      <Route exact path="/">
        <Dashboard />
        </Route>  
      <Route path="/Employees">
        <Employees/>
        </Route>  
       <Route path="/Appointments">
         <Appointments/>
        </Route>  
       <Route path="/Calender">
         <Calender/>
        </Route>  
        <Route path="/Messages">
          <Messages/>
        </Route>  
        
      </Switch>  
        
        
        <Footer />
         </div>
         </Router>
  );
}

export default App;
