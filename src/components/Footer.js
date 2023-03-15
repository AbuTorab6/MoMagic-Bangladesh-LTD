import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'

import { AiOutlineTwitter} from "react-icons/ai";
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";


import card1 from '../asset/image/card1.png'
import card2 from '../asset/image/card2.png'
import card3 from '../asset/image/card3.png'
import card4 from '../asset/image/card4.png'

import Fade from 'react-reveal/Fade';

import win from '../asset/image/win.png'

const Footer = () => {
    return (
        <Fragment>
            <section className='footer-section'>
                <div className='row'>
                    <div className='footer-grid'>
                        <Fade left>
                        <div className='col'>
                            <Link to="/"><img  src={win} /></Link> <span className='store'>store</span>
                            <h3 className='callUs'>Got questions? Call us 24/7!</h3>
                            <p className='phnNo'>03 111 666 144 </p>
                            <p className='phnNo'>0317 1777015.</p>
                            <h3 className='contact'>Contact info</h3>
                            <p className='gmail'>info@winstore.pk</p>
                            <div className='footar-icon' >
                                <ul>
                                    <li><a href="#" target="_blank"><FaFacebookF /></a></li>
                                    <li><a href="#" target="_blank"><AiOutlineTwitter /></a></li>
                                    <li><a href="#" target="_blank"><FaLinkedinIn /></a></li>
                                    <li><a href="#" target="_blank"><FaInstagram /></a></li>
                                </ul>
                            </div>
                        </div>
                        </Fade>

                        <Fade top>
                        <div className='col'>
                            <h3 className='title'>Trending</h3>
                            <p className='opt'>Installments</p>
                            <p className='opt'>Electronics</p>
                            <p className='opt'>Grocery</p>
                            <p className='opt'>Health & Beauty</p>
                            <p className='opt'>Home Appliances</p>
                            <p className='opt'>Mobile Accessories</p>
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className='col'>
                            <h3 className='title'>Information</h3>
                            <p className='opt'>About Us</p>
                            <p className='opt'>Contact Us</p>
                            <p className='opt'>FAQs</p>
                            <p className='opt'>Shipping & Return</p>
                            <p className='opt'>Privacy policy</p>
                            <p className='opt'>Terms & Conditions</p>
                        </div>
                        </Fade>

                        <Fade right>
                        <div className='col'>
                            <h3 className='title'>Customer Care</h3>
                            <p className='opt'>My Account</p>
                            <p className='opt'>Track Your Order</p>
                            <p className='opt'>Recently Viewed</p>
                            <p className='opt'>Wishlist</p>
                            <p className='opt'>Compare</p>
                            <p className='opt'>Become a Vendor</p>
                        </div>
                        </Fade>
                    </div>
                    
                    <Fade left>
                    <div className='card-grid'>
                        <img className='card' src={card1}/>
                        <img className='card' src={card2}/>
                        <img className='card' src={card3}/>
                        <img className='card' src={card4}/>
                    </div>
                    </Fade>
                </div>
            </section >

            <section className='footer-bottom'>
                <div className='row'>
                    <p>© 2021 Winstore. All Rights Reserved.</p>
                </div>
            </section>
        </Fragment>
    );
};

export default Footer;