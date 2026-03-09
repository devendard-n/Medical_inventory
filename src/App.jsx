import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Inventory from "./pages/Inventory"
import Billing from "./pages/Billing"
import History from "./pages/History"
import Login from "./pages/Login"

export default function App(){

const [loggedIn,setLoggedIn]=useState(false)
const [page,setPage]=useState("inventory")

if(!loggedIn){
return <Login setLoggedIn={setLoggedIn}/>
}

return(

<div className="container">

<Sidebar setPage={setPage} setLoggedIn={setLoggedIn}/>

<div className="main">

{page==="inventory" && <Inventory/>}
{page==="billing" && <Billing/>}
{page==="history" && <History/>}

</div>

</div>

)

}