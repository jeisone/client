import * as yup from 'yup'
import { yupResolver} from '@hookform/resolvers/yup'
import roles from '../helpers/roles'


const schema =yup.object().shape({
    name: yup
        .string("el nombre debe ser un texto")
        .required("debe ingresar un nombre")
        .min(1, "debe contener almenos 1 caracteres"), 
    email: yup
        .string("el email debe ser texto")
        .required("debe ingresar un email")
        .email("el email debe ser valido"),
    role: yup
        .string("el role debe ser texto")
        //.required("debe ingresar un rol valido")
        .oneOf(Object.keys(roles), "el  rol no es valido")
        
})
export default yupResolver(schema)