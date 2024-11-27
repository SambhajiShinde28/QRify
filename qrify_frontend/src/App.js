import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import QRifyHomePage from "./components/QRifyHomePage";
import QRCodeComp from "./components/QRCodeComp";
import BarCodeComp from "./components/BarCodeComp";


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<QRifyHomePage/>,
      children:[
        // {
        //   path:"/",
        //   element:<ViewEmployee/>
        // },
        {
          path:"/qrcode",
          element:<QRCodeComp/>
        },
        {
          path:"/barcode",
          element:<BarCodeComp/>
        },
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
