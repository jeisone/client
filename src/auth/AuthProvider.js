import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import roles from "../helpers/roles";

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const history = useHistory()
    const [user, setUser]= useState(null)
    history.push({})

    const login=(userCredentials, fromLocation)=>{
        setUser({id:1, name:"pepito", email:"pepio@gmail.com", role: roles.admin})
        if(fromLocation){
            history.push({fromLocation})

            
        }
        
    }
    const updateUser=(data)=>{
        setUser({
            ...user,
            ...data
        })
    }
    const logout=()=>setUser(null)
    const isLogged=()=>!!user
    const hasRole=(role)=>user?.role=== role
    
    const contextValue= {
        user, 
        isLogged,
        hasRole,
        login, 
        logout,
        updateUser
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        
        </AuthContext.Provider>

    )
}

