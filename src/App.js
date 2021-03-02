import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Result } from "./Result";
import { Header } from "./components/Header";


function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;