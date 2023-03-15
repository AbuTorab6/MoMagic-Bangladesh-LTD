import React,{Fragment,useEffect,useState} from 'react';


import spinner from '../asset/image/spinner.svg'

import { productByCategoryFunc } from '../redux/stateSlice/productState';
import { getProductByCategory } from '../APIServices.js/productAPI';
import {useDispatch,useSelector} from 'react-redux'

import { Link } from 'react-router-dom';

import Zoom from 'react-reveal/Zoom';


const ProductByCategory = () => 
{

    var dispatch = useDispatch();

    var[loading,setLoading]=useState(false)
    var[myactive, setmyActive]=useState("1");

    useEffect(()=>{

        getProductByCategory("electronics").then
        (
            (res)=>
            {
                if(res!==false)
                {
                    dispatch(productByCategoryFunc(res))
                    setLoading(true)
                }
            }
        )

    },[])



    var filter = (p1,p2)=>
    {
        setmyActive(p2.target.id);
        
       
        setLoading(false)
        getProductByCategory(p1).then
        (
            (res)=>
            {
                if(res!==false)
                {
                    dispatch(productByCategoryFunc(res))
                    setLoading(true)
                }
            }
        )
    }





    var productByCategory = useSelector((state)=>state.productState.productByCategory)
    var productByCategoryArr = productByCategory.map(
        function(p1)
        {
            return(
                <Zoom>
                <Link to={'/productDetail/'+p1.id} className='productByCategoryBottomInner-grid-link'>
                <div className='productByCategoryBottomInner-grid'>
                    <div className='left'>
                        <p className='title'> {p1.title} </p>
                        <p className='discountPrice'> RS 4566 </p>
                        <p className='realPrice'> RS {p1.price} </p>
                        <div className='discountBox'><span>Save</span><br/><span>10%</span></div>
                    </div>
                    <div className='right'>
                        <p className='specialOffer'> <span className='blue'>Special</span> Offer </p>
                        <img className='productImg' src={p1.image} />
                    </div>
                </div>
                </Link>
                </Zoom>
            )
        }
    )


    return (
        <Fragment>
            <section className='productByCategorySection'>
                <div className='row'>

                    <div className='productByCategoryTop-grid'>
                        <div className='col title'>
                            <h2><span>Best</span> Deals</h2>
                        </div>
                        <div className='col btn'>
                            <button   className={myactive == "1" ? "activeFilter" : undefined} id={"1"} onClick={filter.bind(this,"electronics")}> electronics</button>
                            <button   className={myactive == "2" ? "activeFilter" : undefined} id={"2"} onClick={filter.bind(this,"jewelery")}> jewelery</button>
                            <button   className={myactive == "3" ? "activeFilter" : undefined} id={"3"} onClick={filter.bind(this,"men's clothing")}> men's clothing</button>
                            <button   className={myactive == "4" ? "activeFilter" : undefined} id={"4"} onClick={filter.bind(this,"women's clothing")}> women's clothing</button>
                        </div>
                    </div>

                    {
                        loading==false ?
                        (
                            <div className='loading'>
                                <img  className='loading-spiner' src={spinner}/>
                            </div>

                        )
                        :
                        (
                            <div className='productByCategoryBottom-grid'>
                        
                                {productByCategoryArr}
                       
                            </div>
                        )
                    }

                    
                </div>
            </section>
        </Fragment>
    );
};

export default ProductByCategory;