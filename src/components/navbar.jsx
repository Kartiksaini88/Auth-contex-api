import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { Data } from "./showdata"

let Navbar = () => {
    let [show, setshow] = useState(false)
    console.log(show)
    return (
        <div className="App">
            <button onClick={() => {
                setshow(!show)
            }}>{show ? "Logout" : "Login"}</button>

            {show ? <Data /> : <div>Click login to see data (*^_^*)</div>}

        </div>
    )
}
export { Navbar }