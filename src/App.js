import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About'
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gradient-to-b from-green-300 to-green-100">
          <ul className="flex py-3 justify-around">
            <li className="flex-initial flex justify-center bg-gray-900 text-white rounded-md">
              <Link className="py-1 px-3" to="/">Home</Link>
            </li>
            <li className="flex-initial flex justify-center bg-gray-900 text-white rounded-md">
              <Link className="py-1 px-3" to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
