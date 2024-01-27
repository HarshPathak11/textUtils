import React from "react";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{props.about}</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input onClick={props.togglemode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={props.mode==='light'?"text-dark":"text-light"} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?"dark":"light"} mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}