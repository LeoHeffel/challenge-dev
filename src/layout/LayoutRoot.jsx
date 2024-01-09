import { Outlet } from "react-router-dom"
import Pagination from "../components/Pagination"
import Search from "../components/Search"
import Filters from "../components/Filters"


const LayoutRoot= ()=>{
    return (
        <div className="max-w-7xl mx-auto">
            <nav className="sticky top-0 z-50 bg-black ">
                <Search/>
           <Filters/>
            </nav>
           
           <Outlet/>
           <footer className="sticky bottom-0 z-50 bg-black ">
             <Pagination/>
           </footer>
          
        </div>
    )
}
export default LayoutRoot