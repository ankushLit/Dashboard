import MainPage from "./pages";
import Employees from "./pages/Employees";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainPage />
        <Switch>
          <Route component={Dashboard} path="/" exact />
          <Route component={Employees} path="/employees" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
