import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Servicos from "./Pages/Servicos";
import Portifolio from "./Pages/Portifolio";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portifolio" exact component={Portifolio} />
        <Route path="/servicos" exact component={Servicos} />
        <Route path="/contato" exact component={Contato} />
      </Switch>
    </Router>
  );
}

export default App;
