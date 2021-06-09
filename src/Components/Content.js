import React from "react";
import { Switch, Route } from "react-router-dom";
import { Cronograma } from "./Cronograma";
import { DatosUsuarios } from "./DatosUsuarios";

export const Content = () => (
  <main className="container is-fluid">
    <Switch>
      <Route exact path="/" component={DatosUsuarios} />
      <Route path="/:nombre/cronograma" component={Cronograma} />
      <Route path="*" component={DatosUsuarios} />
    </Switch>
  </main>
);
