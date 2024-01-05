import { Outlet } from "react-router-dom"
import Pagination from "../components/Pagination"


const LayoutRoot= ()=>{
    return (
        <div className="max-w-7xl mx-auto">
           <h1>filter find</h1>
           <Pagination/>
           <Outlet/>
           <h1>pagination</h1>
        </div>
    )
}
export default LayoutRoot