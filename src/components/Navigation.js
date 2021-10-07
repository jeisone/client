import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import useAuth from "../auth/useAuth"
import routes from "../helpers/routes"


export default function Navigation() {
    const {logout} = useAuth()
    
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" >
            <Navbar.Brand as={NavLink} to={routes.home}>Task Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id ="responsive-navbar-nav" >
                <Nav className= "mr-auto">
                    <Nav.Link as={NavLink} to ={routes.projects}>Projects</Nav.Link>
                    <NavDropdown title ="Admin">
                        <Nav.Link as={NavLink} to ={routes.admin.users}>Usuarios</Nav.Link> 
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to ={routes.login}>Login</Nav.Link>  
                    <Nav.Link as={NavLink} to ={routes.register}>Register</Nav.Link>  
                    <Nav.Link as={NavLink} to ={routes.account}>Accound</Nav.Link> 
                    <Nav.Link as="button" to ={routes.account} onClick={logout} >Logout</Nav.Link>   
                    
                </Nav>
             </Navbar.Collapse>

            
        </Navbar>
    )
}