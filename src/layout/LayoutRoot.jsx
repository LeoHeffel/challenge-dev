import { Outlet } from "react-router-dom"


const LayoutRoot= ()=>{
    return (
        <div className="max-w-7xl mx-auto">
           <h1>filter find</h1>
           <Outlet/>
           <h1>pagination</h1>
        </div>
    )
}
export default LayoutRoot