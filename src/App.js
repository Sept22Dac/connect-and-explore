import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Sports from "./components/Sports";
import Travel from "./components/Travel";
import Concert from "./components/Concert";
import Business from "./components/Business";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/sports" component={Sports}></Route>
        <Route path="/travel" component={Travel}></Route>
        <Route path="/concert" component={Concert}></Route>
        <Route path="/business" component={Business}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
    </Router>
  );
}

export default App;
