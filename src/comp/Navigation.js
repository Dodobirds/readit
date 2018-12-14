import React from 'react';
import {Link} from 'react-router-dom'

import * as routes from '../const/routes.js'
import SignOutButton from "./signOut.js"

import "./css/Navigation.css"
const userDetails = (user) => {
  if (user) {
    return user.email;
  } else {
    return "Guest";
  }
}

const Navigation = (props) =>{
  return (
      <div id="navbar">
      <h2 id="nav-name"> User: {userDetails(props.user)} </h2>
       <ul>
         <li class="nav-li"> <Link to={routes.SIGN_UP}> Sign Up </Link></li>
         <li class="nav-li"> <Link to={routes.SIGN_IN}> Sign In </Link></li>
         <li class="nav-li"> <Link to={routes.HOME}> Home </Link></li>
         <li class="nav-li"> <Link to={routes.ACCOUNT}> Account </Link></li>
         <li class="nav-li"> <SignOutButton /> </li>
       </ul>
     </div>
  )
}
export default Navigation;
