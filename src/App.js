
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/registration';
import Login from './components/login';
import Home from './components/home';
const App = () => {
  return (
    <>
    <div className="App">
    <Router>
      <div>
        <nav className="row text-left m-4 p-2">
              <Link className="p-2" to="/register">Register</Link>
              <Link className="p-2" to="/login">Login</Link>
              <Link className="p-2" to="/home">Home</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    </>
  );
}

export default App;
