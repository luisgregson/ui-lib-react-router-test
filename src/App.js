import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import { Pane, Button } from 'evergreen-ui'

const App = () => {
  return (
    <Router>
      <nav>
        <Pane background="tint2" display="flex" padding={8} justifyContent="space-between" marginBottom={8}>
          <Pane flex={1} display="flex" justifyContent="center">
            <Link to="/">
              <Button appearance="minimal" intent="none">Home</Button>
            </Link>
          </Pane>
          <Pane flex={1} display="flex" justifyContent="center">
            <Link to="/about">
              <Button flex={1} appearance="minimal" intent="none">About</Button>
            </Link>
          </Pane>
        </Pane>
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
    </Router>
  );
}

export default App;
