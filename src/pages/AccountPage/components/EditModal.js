import { Modal, Form, Button, Alert } from "react-bootstrap"
import { useForm } from "react-hook-form";
import roles from '../../../helpers/roles'
import { useEffect } from "react";
import editAccountResolver from "../../../validations/editAccountResolver";
import useAuth from "../../../auth/useAuth";

export default function ChangePasswordModal({isOpen, close,user}){
    
    
    const {handleSubmit, register, formState:{errors, dirtyFields}, reset} = useForm({resolver: editAccountResolver})
    const {updateUser,hasRole}= useAuth()
    const isDirty=!!Object.keys(dirtyFields).length
    const onSubmit=(formData)=>{
        
        if (!isDirty){
            return 
        }
        console.log(dirtyFields)
        updateUser(formData)
        close()
        
    }
    useEffect(()=>{
        if(!isOpen){
            reset()
        }
    },[isOpen, reset])

    useEffect(()=>{
        if(user)
            reset({
                name:user.name,
                email: user.email,
                role: user.role
            })
        

    },[user, reset])
    
    return(
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Mi Cuenta</Modal.Title>



            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label> Nombre</Form.Label>
                        <Form.Control placeholder="Ecribe una Nombre"
                        {...register("name")}
                        type="text">


                        </Form.Control>
                        {errors?.name && (
                             <Form.Text>
                             <Alert variant= "danger">
                                 {errors.name.message}
 
                             </Alert>
 
                         </Form.Text>

                        )}
                       

                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Email</Form.Label>
                        <Form.Control placeholder="Ecribe un correo"
                        {...register("email")}
                        type="email">


                        </Form.Control>
                        {errors?.email && (
                             <Form.Text>
                             <Alert variant= "danger">
                                 {errors.email.message}
 
                             </Alert>
 
                         </Form.Text>

                        )}
                       

                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Rol</Form.Label>
                        <Form.Control disabled={!hasRole('admin')}
                            as="select"
                        {...register("role")}

                        >
                            {Object.keys(roles).map(role=>(
                                <option key={role}>{role}</option>
                            ))}
                            <option >no existe</option>
                            

                        </Form.Control>
                        {errors?.role && (
                             <Form.Text>
                             <Alert variant= "danger">
                                 {errors.role.message}
 
                             </Alert>
 
                         </Form.Text>

                        )}
                       

                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={close} variant="secondary">Cancelar</Button>
                <Button disabled={!isDirty} onClick={handleSubmit(onSubmit)} variant="primary">
                    Actualizar Mi Cuenta</Button>
            </Modal.Footer>
            
        </Modal>
    )
}