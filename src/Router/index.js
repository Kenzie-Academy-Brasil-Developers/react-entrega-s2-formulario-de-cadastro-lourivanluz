import { useState } from "react";
import { Route, Switch } from "react-router";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import { UserPage } from "../pages/UserPage";

const Router = () => {
  const [user, setUser] = useState({});

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login setUser={setUser} />
      </Route>
      <Route path="/:user">
        <UserPage user={user} />
      </Route>
    </Switch>
  );
};

export default Router;
