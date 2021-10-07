import { Container, Row, Col, Button } from "react-bootstrap"
import routes from "../helpers/routes"
import {Link} from "react-router-dom"
export default function HomePage() {
    return(
        <Container>
            <Row classname="mt-5">
                <Col xs={{spam:12}} md={{spam:6}} classname="text-center">
                    <h2>Bienvenido al Gestor de Tareas</h2>
                    <p>
                        ¡aqui podras gestionar tus tareas
                    </p>
                    <p>
                        Marca tus tareas como erminadas, agregar, eliminar o actualizar
                    </p>
                    <div>
                        <Link  to={routes.login}> Ingresar</Link>
                         o <Button  as={Link} to= {routes.register}>Crea una cuenta</Button>
                    </div>
                </Col>
                <Col>
                <img
                    className="img-fluid"
                    src="/img/task-manager.svg"
                    alt="gestor-de-tareas"
                />
                </Col>
            </Row>
        </Container>
    )
}