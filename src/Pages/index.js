import { Route, Switch } from "react-router";
import Casamento from "../components/Casamento";
import Confraternizacao from "../components/Confraternizacao";
import DrinkList from "../components/DrinkList";
import Formatura from "../components/Formatura";

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <DrinkList />
      </Route>
      <Route path="/casamento">
        <Casamento />
      </Route>
      <Route path="/formatura">
        <Formatura />
      </Route>
      <Route path="/confra">
        <Confraternizacao />
      </Route>
    </Switch>
  );
};
export default Pages;
