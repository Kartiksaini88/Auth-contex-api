import { useContext, useEffect, useState } from "react"
import {AuthContext} from "../context/AuthContext"
import "./show.css"

let Data = () =>{
    let {isAuth , toggleAuth} = useContext(AuthContext)
   let [page , pagedata] = useState(1)


let handlechng= (value)=>{
   if(page <= 0 || page > 1){
    //    console.log("first"+page)
       page = 1
    //    console.log("sec"+page)
   }
   pagedata(page + value)
    
}

useEffect(()=>{
    logindata()
},[page])


let url = `https://reqres.in/api/users?page=${page}`
let logindata = async()=>{
  try {
      let res = await fetch(url)
      let data = await res.json()
      data = data.data
      toggleAuth(data)
  } catch (error) {
      console.log(error)
  }
}

    return (
      <div >
         <div className="cont">{isAuth.map(e=><div ><h2>{e.first_name} {e.last_name}</h2><h4>{e.email}</h4><img src={e.avatar}/></div>)} </div> 
          <button onClick={()=>{
              handlechng(1)
          }}>Next Page</button>    
          <button onClick={()=>{
              handlechng(-1)
          }}>Previous Page</button>    
      </div>
    )
}

export {Data}