import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route path="/:slug">
            <Detail />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
