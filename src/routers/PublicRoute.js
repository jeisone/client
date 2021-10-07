import { Redirect, Route } from "react-router-dom"
import useAuth from "../auth/useAuth"

export default function PublicRoute(props) {
    //const user =null;

    const { isLogged  }= useAuth()

    if(isLogged()) return <Redirect to = "/projects"/>

    return (
        <Route {...props}/>

    )
}