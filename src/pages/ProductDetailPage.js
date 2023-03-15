import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation';
import ProductDetail from '../components/ProductDetail';
import Footer from '../components/Footer';

const ProductDetailPage = () => 
{

    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation/>
            <ProductDetail/>
            <Footer/>
        </Fragment>
    );
};

export default ProductDetailPage;