import React from 'react';
import {Link} from 'react-router-dom'

import * as routes from '../const/routes.js'
import SignOutButton from "./signOut.js"
const Navigation = (props) =>{
  return (
     <div>
       <ul>
         <li> <Link to={routes.SIGN_UP}> Sign Up </Link></li>
         <li> <Link to={routes.SIGN_IN}> Sign In </Link></li>
         <li> <Link to={routes.HOME}> Home </Link></li>
         <li> <Link to={routes.ACCOUNT}> Account </Link></li>
         <li> <SignOutButton/> </li>
       </ul>
     </div>
  )
}
export default Navigation;
