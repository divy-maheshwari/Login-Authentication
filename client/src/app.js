import React from "react";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
    return(
        <Router>
        <div className="App">
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user/login" exact component={Login} />
            <Route path="/user/register" exact component={Register} />
            <Route path="/dashboard"  component={Dashboard} /> 
            </Switch>         
        </div>
        </Router>
    );
}

export default App;