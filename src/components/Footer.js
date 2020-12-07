import React from "react"
import "../App.css"
import { Link, Redirect } from 'react-router-dom';
function Footer(){
    return (
    <div style={{paddingTop:"6rem"}}>
        <nav className="navbar navbar-dark bg-danger" style={{padding:"4rem"}}>
        <Link to="/"><a style={{color:"white", fontWeight:"200", fontSize:"16px",textDecoration:"none"}}><b>What is Todo?</b></a></Link>
        <Link to="/"><a style={{color:"white",fontWeight:"200", fontSize:"16px",textDecoration:"none"}}><b>Why Todo?</b></a></Link>
        <Link to="/todos"><a style={{color:"white",fontWeight:"200", fontSize:"16px",textDecoration:"none"}}><b>Create Todo</b></a></Link>
        </nav>
    </div>
    )
}

export default Footer