import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./UI/Header/Header";
import Footer from "./UI/Footer/Footer";
import Home from "./Pages/Home/Home";
import Cases from "./Pages/Cases/Cases";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cases" component={Cases} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
