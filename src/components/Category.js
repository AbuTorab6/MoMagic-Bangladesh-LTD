import React,{Fragment} from 'react';

import '../asset/css/custom.css'


import Slider from "react-slick"


import category1 from '../asset/image/category1.png'
import category2 from '../asset/image/category2.png'
import category3 from '../asset/image/category3.png'
import category4 from '../asset/image/category4.png'
import category5 from '../asset/image/category5.png'


const Category = () => 
{

    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
            },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 866,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 684,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };


    return (
        <Fragment>
            <section className='category-section'>
                <div className='row'>
                    <Slider {...settings}>
                        <div className='category-content'>
                            <div className='categoryImage'>
                                <img className='categoryImg' src={category1} />
                            </div>
                            <div className='category-text'>
                                <p><span>Electronic</span> <span className='blue'>Shop</span></p>
                            </div>
                        </div>
                        <div className='category-content'>
                            <div className='categoryImage'>
                                <img className='categoryImg' src={category2} />
                            </div>
                            <div className='category-text'>
                                <p><span>Fashion</span> <span className='blue'>Shop</span></p>
                            </div>
                        </div>
                        <div className='category-content'>
                            <div className='categoryImage'>
                                <img className='categoryImg' src={category3} />
                            </div>
                            <div className='category-text'>
                                <p><span>Appliances</span> <span className='blue'>Shop</span></p>
                            </div>
                        </div>
                        <div className='category-content'>
                            <div className='categoryImage'>
                                <img className='categoryImg' src={category4} />
                            </div>
                            <div className='category-text'>
                                <p><span>Babies</span> <span className='blue'>Shop</span></p>
                            </div>
                        </div>
                        <div className='category-content'>
                            <div className='categoryImage'>
                                <img className='categoryImg' src={category5} />
                            </div>
                            <div className='category-text'>
                                <p><span>Win-Mart</span> <span className='blue'>Shop</span></p>
                            </div>
                        </div>
                    </Slider>
                    
                </div>
            </section>
        </Fragment>
    );
};

export default Category;