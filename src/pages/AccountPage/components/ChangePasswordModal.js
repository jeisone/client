import { Modal, Form, Button, Alert} from "react-bootstrap"
import { useForm } from "react-hook-form";
import changePasswordResolver from "../../../validations/changePasswordResolver";
import { useEffect } from "react";
export default function ChangePasswordModal({isOpen, close}){
   
    
    const {handleSubmit, register, formState:{errors}, reset} = useForm({resolver: changePasswordResolver})
    
    const onSubmit=(formData)=>{
        alert(formData)
        close()
    }
    useEffect(()=>{
        if(!isOpen){
            reset()
        }

    },[isOpen, reset])
    
    return(
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Cambiar Contraseña</Modal.Title>



            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label> Nueva Contraseña</Form.Label>
                        <Form.Control placeholder="Ecribe una nueva contraseña"
                        {...register("password")}
                        type="password">


                        </Form.Control>
                        {errors?.password && (
                             <Form.Text>
                             <Alert variant= "danger">
                                 {errors.password.message}
 
                             </Alert>
 
                         </Form.Text>

                        )}
                       

                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={close} variant="secondary">Cancelar</Button>
                <Button onClick={handleSubmit(onSubmit)} variant="primary">
                    Actualizar Contraceña</Button>
            </Modal.Footer>
            
        </Modal>
    )
}