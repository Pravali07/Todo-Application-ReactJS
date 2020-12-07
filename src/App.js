import React from "react"
import Todos from "./components/Todos"
import Home from "./components/Home"
import { BrowserRouter, Route } from 'react-router-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/todos/" exact={true} component={Todos}/>
      </BrowserRouter>
    );
  }
}


export default App

