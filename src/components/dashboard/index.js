import React from "react"
import {Switch, Route} from "react-router-dom"

import "./style.css"
import Topnav from "../topnav/index"
import Search from "../search/index"

function Dashboard(){
     return (
          <div className='dashboard'>
          <Topnav />
          <Switch>
               <Route path="/collection">Collection</Route>
               <Route path="/search"> <Search /> </Route>
               <Route path="/home">home</Route>
               <Route path="/">Home</Route>
          </Switch>
          </div>
     )
}

export default Dashboard