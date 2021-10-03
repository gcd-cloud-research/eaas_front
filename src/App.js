import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Logged from "./components/Logged";
import ProtectedRoute from "./auth/protected-route";

function App() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

  return (
      <>
      <Navigation/>
      <Switch>
          <Route path="/" exact component={Home}/>
          <ProtectedRoute path="/logged" component={Logged}/>
      </Switch>
      </>
  );
}

export default App;
