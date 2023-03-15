import React,{Fragment} from 'react';

import '../asset/css/custom.css'

import Fade from 'react-reveal/Fade';

const Hero = () => {
    return (
        <Fragment>
            <section className='hero-section'>
                <div className='row'>
                    <div className='hero-grid'>
                       <div>
                        <div className='textbox'>
                            <Fade bottom><h1>Shop <span>Computer & experience</span></h1></Fade>
                            <Fade bottom>
                            <p>You cannot inspect quality into the product; it is already there. <br/>
                                I am not a product of my circumstances. I am a product of my decisions.
                            </p>
                            </Fade>
                            <Fade bottom>
                            <button className="hero-btn" to="/about" >View More</button></Fade>
                        </div>
                        </div> 
                        <div>
                            <div className='circle'>
                                <p>40% Off</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Hero;