import React from 'react';
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h1>Freshly Baked...</h1>
                <p>Hand Decorated</p>
                <h3>WelCome</h3>
                <p>560083, 1st Floor,  07 Cross, 21th Main,HSR layout, Bangalore, Karnnataka</p>
            </div>

            <div className="midFooter">
                <h1>Fusion Cakes</h1>
                <p> The CakeZone desserts are undoubtedly the most delicious.
                </p>
                <p>^^ Enjoy the Cup love ^^ </p>

                <p>Copyrights 2022 &copy; Ramya GK</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="http://instagram.com/__ramya.gowda__">Instagram</a>
                <a href="http://youtube.com/Cupcakes">Youtube</a>
                <a href="http://instagram.com/_ramya.gowda_">Facebook</a>
            </div>
        </footer>
    );
};

export default Footer
