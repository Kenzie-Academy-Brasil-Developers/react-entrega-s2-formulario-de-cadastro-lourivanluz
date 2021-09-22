import { useState } from "react";
import { Route, Switch } from "react-router";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import { UserPage } from "../pages/UserPage";

const Router = () => {
  const [user, setUser] = useState({});
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <Home user={user} isAuthorized={isAuthorized} />
      </Route>
      <Route path="/login">
        <Login setUser={setUser} setIsAuthorized={setIsAuthorized} />
      </Route>
      <Route path="/user">
        <UserPage
          user={user}
          isAuthorized={isAuthorized}
          setIsAuthorized={setIsAuthorized}
        />
      </Route>
    </Switch>
  );
};

export default Router;
