import React,{Fragment,useEffect} from 'react';


import { getAllProduct } from '../APIServices.js/productAPI';
import { allProductFunc } from '../redux/stateSlice/productState';
import {useDispatch,useSelector} from 'react-redux'

import Fade from 'react-reveal/Fade';

import { Link } from 'react-router-dom';

const NewArrive = () => 
{

    var dispatch = useDispatch();

    useEffect(()=>{

        getAllProduct().then
        (
            (res)=>
            {
                if(res!==false)
                {
                    dispatch(allProductFunc(res))
                }
            }
        )

    },[])







    var allProduct = useSelector((state)=>state.productState.allProduct)
    var allProductArr = allProduct.slice(0, 10).map
    (
        function(p1)
        {
            return(
                
                <div className='col'>
                    <Fade bottom><span className='shopName'>Bin Bakar Electronics</span></Fade>
                    <Fade bottom><p className='productTitle'>{p1.title}</p></Fade>
                    <Fade bottom><Link to={'/productDetail/'+p1.id}><img className='productImg' src={p1.image}/></Link></Fade>
                    <Fade bottom><p className='price'> <span className='realPrice'>RS {p1.price}</span> <span className='discountPrice'>RS 2500</span></p></Fade>
                    <Fade bottom><button className='cartBtn'>Add To Cart</button></Fade>
                </div>
                
            )
        }
    )

    return (
        <Fragment>
            <section className='newArrive-section'>
                <div className='row'>
                    <h2><span>New</span> Arrivals</h2>
                    <div className='newArrive-grid'>
                        {allProductArr}

                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default NewArrive;