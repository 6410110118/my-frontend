import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Blogs from './component/blog';
import AddProduct from './component/addproduct';
import './styles.css';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="blogs" element={<Blogs />} />
                <Route path="addproduct" element={<AddProduct/>} />
            </Routes>
        </BrowserRouter>
    )
}