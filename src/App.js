import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPages';
import ProductPage from './Pages/ProductPage';
import NavBar from './Componenets/NavBar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Children, useState } from 'react';
import HomePage from './Pages/HomePage';
import ProductDetials from './Pages/ProductDetails';
import JsCodsTry from './Pages/JsCodsTry';
import Modal from './Componenets/Modal';
import { ProductContext } from './Libes/Context';

function App() {
  const [cardData,setCardData]=useState({
    cardList:{
      
    }
  })
  const navRoot =createBrowserRouter([{
    element:(<div>
              <ProductContext.Provider value={{data:cardData,dispatch: setCardData}}>
                <NavBar/>
              <Outlet/>
              <Modal/>
              </ProductContext.Provider>
    </div>),
    errorElement : <div>N!!ot Found</div>
    ,
    path:"/",
    children:[{
  element:<HomePage/>,
  path:"/"
},{
      element:<LoginPage/>,
      path:"/login"
    },{
      element:<ProductPage/>,
      path:"/product"
    },
  {
    element:<div>this is About page</div>,
    path:"/about"
  },{
    element:<ProductDetials/>,
       path: "/product/:productId"
  },{
    element:<JsCodsTry/>,
    path:"/trytime"
  }
]
  }]);
  return (
    <>
    <RouterProvider router={navRoot}></RouterProvider>
    </>
  )
}

export default App;
