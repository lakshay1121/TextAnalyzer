//react function base component.

import React from 'react'

import PropTypes from 'prop-types'




export default function Navbar(props) {
    return (

      
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>


                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}

                {/* switch button for dark mode */}


                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                </div>
            </div>
        </nav>

       
    )
}



//sets the variable type , or it can be anything a object or a number or a string or  a array , so this is basically a check condition which prevents the error if you pass the parameter by wrong types.

Navbar.propTypes = {

    title: PropTypes.string.isRequired,

    aboutText: PropTypes.string

}

//gives the default value of props , if you forgot to pass the parameters.

Navbar.defaultProps = {

    title: "title here",
    aboutText: "about text here"
}