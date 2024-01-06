import { Outlet } from "react-router-dom"
import Pagination from "../components/Pagination"
import Search from "../components/Search"
import Filters from "../components/Filters"


const LayoutRoot= ()=>{
    return (
        <div className="max-w-7xl mx-auto">
           <Search/>
           <Filters/>
           <Pagination/>
           <Outlet/>
        </div>
    )
}
export default LayoutRoot