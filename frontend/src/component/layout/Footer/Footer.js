import React from 'react';
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
const Footer = () => {
    return (
        <footer id="footer" className=' flex flex-col md:flex-row sm:flex-col'>
            <div className="leftFooter">
                <h2>About</h2>
                <p className=' p-0 m-0'>Our Story</p>
                <p className=' p-0 m-0'>Insights</p>
                <p className=' p-0 m-0'>FAQ</p>
            </div>

            <div className="midFooter">
                <div className="py-6 my-4 pl-3">
                    <span id='font' className="font-sans text-[3rem] flex justify-center items-center logoFont text-black">Oven <h1 className='logoFont text-yellow-500'>
                        House
                    </h1></span>
                </div>
                <p> The italiyna foods are undoubtedly the most delicious.
                </p>
                <p>^^ Enjoy the deserts and pizza ^^ </p>

                <p>Copyrights 2022 &copy; Maimoona</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="http://instagram.com/">Instagram</a>
                <a href="http://youtube.com">Youtube</a>
                <a href="http://instagram.com">Facebook</a>
            </div>
        </footer>
    );
};

export default Footer
