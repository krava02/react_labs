import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from './routes/Header';
import Categories from './routes/Categories';
import Products from './routes/Products';
import Product from './routes/Product';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children: [
            {
                path: "/categories",
                element: <Categories/>,
                loader: async ({request}) => {
                    return fetch('https://dummyjson.com/products/categories', {signal: request.signal})
                }
            },
            {
                path: "/categories/:category/products",
                element: <Products/>,
                loader: async ({request, params}) => {
                    return fetch(`https://dummyjson.com/products/category/${params.category}`, {signal: request.signal})
                }
            },
            {
                path: "/categories/:category/products/:id",
                element: <Product/>,
                loader: async ({request, params}) => {
                    return fetch(`https://dummyjson.com/products/${params.id}`, {signal: request.signal})
                }
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);


reportWebVitals();