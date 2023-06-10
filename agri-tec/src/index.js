import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root, {loader as rootloader, action as rootAction} from './routes/root';
import ErrorPage from './Router/error-page';
import Contact from './routes/contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    loader:rootloader,
    action:rootAction,
    children:[
      {
        path:'contacts/:contactId',
        element:<Contact />,
         },
    ]
  },

 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <RouterProvider router={router} /> */}
     <BrowserRouter>
     <App />
     </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
