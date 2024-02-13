import { useState } from "react"
// import { Link } from "react-router-dom"
import { NavLink } from 'react-router-dom';
function Nav(){
   return (
        <div className="m-2">
            <ul className="list-group list-group-horizontal justify-content-around">
                <li className="list-group-item border  border-0">
                    <NavLink className="btn  border rounded-pill p-3" activeClassName="active btn-primary"  exact to="/">Home</NavLink>
                </li>
                <li className="list-group-item  border-0">
                    <NavLink className="btn border rounded-pill p-3" activeClassName="active btn-primary" to="/addPatient">Ajouter une Patient</NavLink>
                </li>
                <li className="list-group-item  border-0">
                    <NavLink className="btn border rounded-pill p-3" activeClassName="active btn-primary" to="/listepatients">Liste des patients</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Nav