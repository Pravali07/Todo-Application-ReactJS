import React from "react"
import Header from "./Navbar"
import Content from "./Content"
import Footer from "./Footer"
import "../App.css"

class Home extends React.Component{
    render(){
        return(
            <div>
                <a name="top"></a>
                <Header/>
                <Content/>
                <center><a href="#top" className="to-top top" style={{textDecoration:"none"}}>Back to top</a></center>
                <Footer/>
            </div>
        )
    }
}

export default Home