import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";

function App(props) {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user && window.location.pathname !== "/register") {
      props.history.push("/login");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
}

export default withRouter(App);
