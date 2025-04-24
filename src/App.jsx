import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import { Home, About, Contact, Product } from "./pages"

import HeroLayout from "./layouts/HeroLayout";


function App() {
  const CreateRoutes = createBrowserRouter([
    { 
      path: "/",
      element: <HeroLayout/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "/About",
          element: <About/>
        },
        {
          path: "/Contact",
          element: <Contact/>
        },
        {
          path: "/Product/:id",
          element: <Product/>
        }
      ]
    },
  ]);
  return <RouterProvider router={CreateRoutes}/>
}

export default App