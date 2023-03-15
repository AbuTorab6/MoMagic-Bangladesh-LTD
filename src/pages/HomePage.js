import React,{Fragment,useEffect} from 'react';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Category from '../components/Category';
import NewArrive from '../components/NewArrive';
import ProductByCategory from '../components/ProductByCategory';
import Footer from '../components/Footer';

const HomePage = () => 
{
    
    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation/>
            <Hero/>
            <Category/>
            <NewArrive/>
            <ProductByCategory/>
            <Footer/>
        </Fragment>
    );
};

export default HomePage;