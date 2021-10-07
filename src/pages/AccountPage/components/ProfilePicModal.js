import { useState } from "react"
import { Modal, Alert, Button, Form} from "react-bootstrap"
import useAuth from '../../../auth/useAuth'
import { toast } from "react-toastify";


export default function ProfilePicModal({isOpen, close}){

    const [fileName, setFileName]= useState("subir una Imagen")
    const [selectedFile, setSelectedFile]= useState(null)
    const handleFileChange=(e)=>{
        const file= e.target.files[0]
        const SIZEImg=2*1024*1024// tamaño de la imagen
        const isValidSize= file.size < SIZEImg
        const isNameOfOneImageRegEX= /.(jge?g|gif|png)$/i
        const isValidType=isNameOfOneImageRegEX.test(file.name)

        if(!isValidSize) return toast.error("ingrese una magen de máximo 2Mb")
        if(!isValidType) return toast.error("Formato de imagen incorrecto")

        console.log(e.target.files[0].name)


        setFileName(file.name)

        const reader = new FileReader()
        reader.onloadend= ()=>{
            setSelectedFile(reader.result)
        }

        reader.readAsDataURL(file)
        
    }
    const {logout}=useAuth()
    const handleUpdateProfilePic=()=>{
        if(!selectedFile) return toast.warning("ingrese una imagen")

    }
    const handleDelete=()=>{

        //Peticion http
        //close()
        logout()
    }


    return(
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Cambiar Foto de Perfil</Modal.Title>


            </Modal.Header>
            <Form>
                <Form.File
                custom
                label={fileName}
                data-browse="buscar"
                onChange={handleFileChange}
                accept=".jpg, .jpeg, ,.gif, .png">
                
                </Form.File>

            </Form>

            <Modal.Body>
                <img 
                    className="img-fluid"
                    src={selectedFile}
                    alt="profile-previw"
                    />

                <h2>input para subir el archivo</h2>
                <h2>previsualzar imagen</h2>
                

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Cancelar</Button>
                <Button variant="primary"
                onClick={handleUpdateProfilePic}>
                    Actualizar Imagen
                </Button>
            </Modal.Footer>
            
        </Modal>
    )
}