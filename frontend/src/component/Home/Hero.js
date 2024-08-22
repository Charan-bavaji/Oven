import React from 'react'
import "./Hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="content">
                    <h1 className='logoFont'>
                        <span className="highlight logoFont">Unlimited Happiness With</span> <br />
                        Pizza Unlimited
                    </h1>
                    <p className='logoFont'>Fresh. Cheesy. Moody delights</p>
                    <div>
                        <Link to={"/products"}>
                            <button className="order-button">ORDER NOW</button>
                        </Link>
                    </div>
                </div>
                <div className="pizza-image"></div>
            </div>
        </div>
    )
}

export default Hero
