import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import AddUsers from './components/users/AddUsers';
import EditUsers from './components/users/EditUsers';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import View from './components/users/View';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/users/add" component={AddUsers}/>
            <Route exact path="/users/edit/:id" component={EditUsers}/>
            <Route exact path="/users/view/:id" component={View}/>
            
            <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
