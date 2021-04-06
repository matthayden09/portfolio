import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Contact from "./pages/contact"
import Home from "./pages/home"
import Nav from "./components/nav"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
