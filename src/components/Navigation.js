import React,{Fragment,useState,useEffect} from 'react';

import '../asset/css/custom.css'

import {Navbar,Nav,Container} from 'react-bootstrap'
import {NavLink,Link} from 'react-router-dom'


import { AiOutlineTwitter,AiOutlineSearch,AiOutlineHeart} from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { FaFacebookF,FaLinkedinIn,FaInstagram,FaHeadphones } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

import win from '../asset/image/win.png'

const Navigation = () => 
{
    const[v1,v2]=useState({
        navigationBackground:"navigation-background"
    });

    var jubo = ()=>
    {
        var topNav= document.querySelector('.top-nav')
        if(window.scrollY>1)
        {
            v2({navigationBackground:"navigation-background-scroll"});
            topNav.classList.add('visibility-none')
            topNav.classList.remove('visibility-yes')
            
        }
        else if(window.scrollY<1)
        {
            v2({navigationBackground:"navigation-background"});
            topNav.classList.remove('visibility-none')
            topNav.classList.add('visibility-yes')
        }
    }

   
    useEffect(()=>{
        window.addEventListener('scroll',jubo); 
    });


    return (
        <Fragment>

            <nav className='top-nav visibility-yes'>
                <div className='nav-row'>
                    <div className='top-nav-grid' >
                        <div className='top-nav-left'>
                            <div className='top-nav-left-inner-grid'>
                                <div className='col' >
                                   <Link to="/"><img className='winimage' src={win} /></Link> <span className='store'>store</span>
                                </div>
                                <div className='col' >
                                    <select className='selectCategory' >
                                        <option value="">All Categories</option>
                                        <option value="electronics">electronics</option>
                                        <option value="jewelery">jewelery</option>
                                        <option value="men's clothing">men's clothing</option>
                                        <option value="women's clothing">women's clothing</option>
                                    </select>
                                </div>
                                <div className='col' >
                                    <input placeholder='Search for Products' className='searchBox' type="text"  />
                                </div>
                                <div className='col' >
                                    <button className='searchBtn'><span><AiOutlineSearch/></span></button>
                                </div>
                            </div>
                        </div>
                        
                        <div className='top-nav-right'>
                            <div className='top-nav-right-inner-grid'>
                                <div className='col' >
                                   <p className='callUs'>Call us now</p>
                                   <p className='phn'><span><FaHeadphones/> +011 5827918</span></p>
                                   <p className='signin'>Sign in</p>
                                </div>
                                <div className='col' >
                                    <span className='man'><MdManageAccounts/></span>
                                </div>
                                <div className='col' >
                                    <span className='heart'><AiOutlineHeart/></span>
                                </div>
                                <div className='col cart' >
                                   <p className='cart3'><span>3</span></p>
                                   <p className=''><span className=''><HiOutlineShoppingCart/></span><span>Cart</span></p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


            <Navbar className={v1.navigationBackground} fixed="top"   bg="light" expand="lg"  variant="dark" >
                <Container fluid>
                    <Navbar.Brand className='navigation-brand' > Brouse By Category</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}  navbarScroll >
                        <NavLink className="navigation-list"  to="/">Home</NavLink>
                        <NavLink className="navigation-list"  to="/">Easy Monthly Installments</NavLink>
                        <NavLink className="navigation-list"  to="/">Shop by Brands</NavLink>
                        <NavLink className="navigation-list"  to="/">Become a Vendor</NavLink>
                    </Nav>
                    
                    <div className='bottom-nav-right' >
                        <ul>
                            <li><a href="#" target="_blank"><FaFacebookF /></a></li>
                            <li><a href="#" target="_blank"><AiOutlineTwitter /></a></li>
                            <li><a href="#" target="_blank"><FaLinkedinIn /></a></li>
                            <li><a href="#" target="_blank"><FaInstagram /></a></li>
                        </ul>
                    </div>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            
        </Fragment>
    );
};

export default Navigation;