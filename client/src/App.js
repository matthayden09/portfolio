import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Contact from "./pages/contact"
import Home from "./pages/home"
import Nav from "./components/nav"
import Header from "./components/header"
import Footer from "./components/footer"


function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
