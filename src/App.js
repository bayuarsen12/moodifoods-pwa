import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailProduct from "./pages/DetailProduct";
import { useEffect } from "react";

function App(props) {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (
      !user &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/login"
    ) {
      props.history.push("/login");
    }
  });
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/detail-product" component={DetailProduct} />
    </Switch>
  );
}

export default withRouter(App);
