
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import ChangePasswordModal from './components/ChangePasswordModal'
import EditModal from './components/EditModal'
import useAuth from '../../auth/useAuth'
import DeleteModal from './components/DeleteModal'
import useModal from '../../hooks/useModal'
import ProfilePicModal from './components/ProfilePicModal'
export default function AccountPage() {
    const {user}= useAuth()

    const [isOpenDeleteModal, openDeleteModal, closeDeleteModal]=useModal()
    const [isOpenChangePasswordModal, openChangePasswordModal, closeChangePasswordModal]=useModal()
    const [isOpenEditModal, openEditModal, closeEditModal]=useModal()
    const [isOpenProfilePicModal, openProfilePicModal, closeProfilePicModal]=useModal()
    return( 
        <>
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <img 
                    src="/img/male_avatar.svg"
                    alt="profile"
                    onClick={openProfilePicModal}
                    style={{
                        width:'200px',
                        height:'200px',
                        borderRadius:'50%',
                        objectFit:'cover',
                        cursor: 'pointer'
                    
                    }}>
                    
                    </img>
                </Col>
                <Col className="mt-4">
                    <Card style={{maxWidth: '360px'}} className="mx-auto p-4">
                        <p className="text-center"><b>Nombre: </b>{user.name}</p>
                        <p className="text-center"><b>email: </b>{user.email}</p>
                        <p className="text-center"><b>rol: </b>{user.role}</p>
                    <Button variant="warning"
                        onClick={openEditModal}>
                        Editar Cuenta
                    </Button>
                    <Button  variant="link" className="mt-1"
                    onClick={openChangePasswordModal}>
                        Cambiar Contraseña
                    </Button>
                    <Button  variant="link" className="mt-4 text-danger"
                    onClick={openDeleteModal}>
                        Eliminar Cuenta..
                    </Button>
                    
                    </Card>
                </Col>



            </Row>
            




        </Container>
        <DeleteModal isOpen={isOpenDeleteModal}
            close={closeDeleteModal}>
            

        </DeleteModal>
        <ChangePasswordModal 
        isOpen={isOpenChangePasswordModal}
        close={closeChangePasswordModal}
        
        ></ChangePasswordModal>
        
        <EditModal 
        isOpen={isOpenEditModal}
        close={closeEditModal}
        user={user}
        ></EditModal>
         <ProfilePicModal 
        isOpen={isOpenProfilePicModal}
        close={closeProfilePicModal}
        user={user}
        ></ProfilePicModal>ProfilePic     </>
    )
}