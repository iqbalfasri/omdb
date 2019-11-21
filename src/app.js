import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/home.page";
import Detailpage from "./pages/detail.page";

function App() {
  return (
    <Switch>
      <Route path="/" component={Homepage} />
      <Route path="/movie/detail/:id" component={Detailpage} />
    </Switch>
  );
}

export default App;
