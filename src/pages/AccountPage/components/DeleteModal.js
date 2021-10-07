import { Modal, Alert, Button } from "react-bootstrap"
import useAuth from '../../../auth/useAuth'
export default function DeleteModal({isOpen, close}){
    const {logout}=useAuth()
    const handleDelete=()=>{

        //Peticion http
        //close()
        logout()
    }
    return(
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar Cuenta</Modal.Title>


            </Modal.Header>
            <Modal.Body>
                <Alert variant="danger">
                    ¿Esta seguro de Eliminar la cuenta?
                </Alert>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Cancelar</Button>
                <Button onClick={handleDelete} variant="danger">Eliminar Cuenta</Button>
            </Modal.Footer>
            
        </Modal>
    )
}