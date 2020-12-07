import React from "react"
import "../App.css"
import AOS from "aos";
import { Link, Redirect } from 'react-router-dom';
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


class Content extends React.Component{
    render(){
        return(
        <div>
                    <center>
                    <h1 style={{paddingTop:"3rem",color:"black"}}><b>TODOs</b></h1>
                    <h4 style={{paddingTop:"1rem"}}>Organize your tasks with TODO now!</h4>
                    </center>
                <main className="container">
        
                <section className="card" data-aos="fade-left">
                <img src="./images/create8.jpg" alt="" />
                <div>
                    <h3 style={{color:"black"}}>What is <b style={{color:"black"}}>TODO?</b></h3>
                    <p>
                    It’s a list of tasks you need to complete, or things that you want to do. Most 
                    typically, they’re organised in order of priority.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Wikipedia:To-do_list" className="btn btn-outline-danger"><b>KNOW MORE</b></a>
                </div>
                </section>
        
                <section className="card" data-aos="fade-right">
                <img src="./images/what5.jpg" alt="" />
                <div>
                    <h3 style={{color:"black"}}>Why <b style={{color:"black"}}>TODOs</b></h3>
                    <p>
                    One of the most important reasons you should use a to do 
                    list is that it will help you stay organised.
                    </p>
                <a href="https://checkify.com/blog/what-is-a-todo-list/#:~:text=a%20ToDo%20List%3F-,What%20is%20a%20ToDo%20List%3F,acts%20as%20a%20memory%20aid." className="btn btn-outline-danger"><b>KNOW MORE</b></a>
                </div>
                </section>
        
                <section className="card" data-aos="fade-left">
                <img src="./images/why5.jpg" alt="" />
                <div>
                    <h3 style={{color:"black"}}>Want to create one?</h3>
                    <p>
                    Just click the button below and create your own list.
                    </p>
                    <Link to="/todos"><button className="btn btn-outline-danger"><b>GET STARTED</b></button></Link>
                </div>
                </section>
            </main>
      </div>
      
        )
    }
}
AOS.init({
    duration:1000 
  });


export default Content