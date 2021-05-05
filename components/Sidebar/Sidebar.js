import React from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';


import { Link } from "react-router-dom"


function topbar() {
    return (
        <div >

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/PageA">PageA <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/PageB">PageB</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/PageC">PageC</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="PageD">PageD</Link>
                        </li>

                    </ul>


                </div>
                <div className="nav-item">
                    <Link className="nav-link " to="/login">login</Link>
                </div>
            </nav>

        </div>
    )
}

export default topbar