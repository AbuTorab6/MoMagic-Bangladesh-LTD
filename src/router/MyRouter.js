import React,{Fragment} from 'react';

import {Routes,Route,BrowserRouter} from 'react-router-dom'

import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';

const MyRouter = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/productDetail/:id' element={<ProductDetailPage/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
};

export default MyRouter;