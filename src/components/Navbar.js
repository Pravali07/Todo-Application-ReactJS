import React from "react"
import "../App.css"
import { Link, Redirect } from 'react-router-dom';
class Header extends React.Component{
  render(){
    return(
        <div>
            <nav className="navbar navbar-dark bg-danger">
            <Link to="/"><a className="navbar-brand" style={{fontWeight:"550",height:"40px",color:"white"}}>
                <img src="./images/image1.png" class="imag1" width="30" height="30" class="d-inline-block align-top" alt=""/>    TODO
            </a></Link>
            </nav>
      </div>
    )}
}

export default Header
