import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Cards from "../components/Cards";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutRoot/>,
        children:[
            {
                index: true,
                element: <Cards />
            },
            {
                path: '/:page',
                element: <Cards  />
            }
        ]
    }
])