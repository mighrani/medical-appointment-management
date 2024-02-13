import React from "react";
import Home from "./componets/Home";
import Nav from "./componets/Nav.jsx";
import AddPation from "./componets/AddPation";
import "./Store.js"
import DossierMedical from "./componets/Dossier_medical.jsx";
import ListePatient from "./componets/Liste_patient.jsx";
import Addpatient from "./componets/AddPation";
import { Route, Switch } from "react-router-dom";
import Login from "./componets/Login_in.jsx";
import {  useSelector } from "react-redux";

function App(){
  const login = useSelector(state=>state.login.valid)
  return(
    <div>
      <Nav/>
      {!login && <Login/>}
      {login && 
      <div>
        <Switch>
          <Route path="/addpatient" component={AddPation}/>
          <Route path="/dossiermedical" component={DossierMedical}/>
          <Route path="/listepatients" component={ListePatient}/>
          <Route path="/addPatient" component={Addpatient}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
      } 

    </div>
  )
}

export default App;
