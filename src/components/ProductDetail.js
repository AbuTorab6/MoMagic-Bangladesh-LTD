import React,{Fragment,useEffect} from 'react';



import {useNavigate,useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

import { getProductDetailById } from '../APIServices.js/productAPI';
import { productDetailByIdFunc } from '../redux/stateSlice/productState';

const ProductDetail = () => 
{

    var idFromUrl = useParams().id;
    var dispatch = useDispatch();


    useEffect(()=>{

        getProductDetailById(idFromUrl).then
        (
            (res)=>
            {
                if(res!==false)
                {
                    dispatch(productDetailByIdFunc(res))
                }
            }
        )

    },[])


    var productDetailById = useSelector((state)=>state.productState.productDetailById)


    return (
        <Fragment>
            <section className='productDetail-section'>
                <div className='row'>
                    <div className='productDetail-grid'>
                        <div>
                            <img className='productImg' src={productDetailById.image}/>
                        </div>
                        <div>
                            <h2 className='product-title'> {productDetailById.title}</h2>
                            <p className='product-des'>{productDetailById.description}</p>
                            <p className='product-price'>Price {productDetailById.price}</p>
                            <span className='product-category'>Category: {productDetailById.category}</span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default ProductDetail;