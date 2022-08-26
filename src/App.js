import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Attività from "./components/Attività/Attività";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Dipendenti from "./components/Dipendentis/Dipendenti/Dipendenti";
import Impostazioni from "./components/Impostazioni/Impostazioni";
import Timbrature from "./components/Timbrature/Timbrature";
import Sedi from "./components/Sedi/Sedi";
import Registration from "./components/Registration/Registration";
import SignupHome from "./components/SignupHome/SignupHome";
import TuttiPage from "./components/Dipendentis/TuttiPage/TuttiPage";
import TeamProfileEdit from "./components/Dipendentis/TeamProfile/TeamProfileEdit";
import TeamProfileAdd from "./components/Dipendentis/TeamProfile/TeamProfileAdd";
import NewTutti from "./components/Dipendentis/NewTutti/NewTutti";
import TeamProfile from "./components/Dipendentis/TeamProfile/TeamProfile";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={SignupHome} />
        <Route exact path="/registration/form" component={Registration} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/timbrature" component={Timbrature} />
        <Route exact path="/dependenti" component={Dipendenti} />
        <Route exact path="/dependenti/nuovo-dipendente" component={NewTutti} />
        <Route
          exact
          path="/dependenti/tutti/:tuttiName/"
          component={TuttiPage}
        />
        <Route
          exact
          path="/dependenti/team/:teamName"
          component={TeamProfile}
        />
        <Route
          exact
          path="/dependenti/team/:teamName/edit"
          component={TeamProfileEdit}
        />
        <Route
          exact
          path="/dependenti/new-team/add"
          component={TeamProfileAdd}
        />
        <Route exact path="/attività" component={Attività} />
        <Route exact path="/sedi" component={Sedi} />
        <Route exact path="/impostazioni" component={Impostazioni} />
      </Router>
    );
  }
}
