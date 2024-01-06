import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Cards from "../components/Cards";
import Details from "../components/Details";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutRoot/>,
        children:[
            {
                index: true,
                element: <Cards />
            },
      
        ]
    }
])