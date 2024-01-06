import { Outlet } from "react-router-dom"
import Pagination from "../components/Pagination"
import Search from "../components/Search"


const LayoutRoot= ()=>{
    return (
        <div className="max-w-7xl mx-auto">
           <Search/>
           <Pagination/>
           <Outlet/>
        </div>
    )
}
export default LayoutRoot