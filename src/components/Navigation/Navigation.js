import React from 'react'
import { NavLink } from 'react-router-dom';
function Navigation () {
    return (
        <div className="row">
            <div className="col">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>Pending</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/completed">Completed</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/create">Create</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/trash">Trash</NavLink>
                    </li>
                </ul>

            </div>

        </div>
    )
}
export default Navigation;