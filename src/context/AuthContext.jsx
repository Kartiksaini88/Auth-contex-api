import { Children, createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [isAuth , toggleAuth] = useState([])
    // console.log(isAuth)
   
    // useEffect(()=>{
    //     loginData()
    // },[])

    // let loginData = async()=>{
    //     try {
    //         let res = await fetch("https://reqres.in/api/users?page=2")
    //         let data = await res.json()
    //         data = data.data
    //         toggleAuth(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
     return <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>

}