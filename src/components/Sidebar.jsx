export default function Sidebar({setPage,setLoggedIn}){

const logout=()=> {
setLoggedIn(false)
}

return(

<div className="sidebar">

<h2>Pharmacy</h2>

<button onClick={()=>setPage("inventory")}>
Inventory
</button>

<button onClick={()=>setPage("billing")}>
Billing
</button>

<button onClick={()=>setPage("history")}>
Billing History
</button>

<button className="logout-btn" onClick={logout}>
Logout
</button>

</div>

)

}