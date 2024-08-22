import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ordernow from "../../../images/Order-Now.png";
const Navbar = () => {
    const content = [
        { name: "Home", link: "" },
        { name: "Manu", link: "Manu" },
        { name: "Login", link: "Login" },
        { name: "About", link: "about" }
    ];
    const scrollDown = () => {
        const scrollCal = window.innerHeight * 0.6;
        window.scrollBy({
            top: scrollCal,
            behavior: 'smooth',
        });
    }

    const [lists, setLists] = useState(false);
    const displayList = () => {
        setLists(!lists);
    }
    return (
        <>
            <div className="w-full h-28 flex justify-center items-center bg-inherit z-50">
                <div className="w-[22rem] md:w-full h-28  flex justify-around items-center  text-black">
                    <div className=" p-3 m-1 md:hidden flex justify-center items-center">
                        <span className="material-symbols-outlined rounded-full p-1.5 hover:bg-slate-400 cursor-pointer transition duration-150 ease-in-out hover:-translate-y-2"
                            onClick={displayList}
                        >
                            menu_open
                        </span>
                    </div>
                    <div className="py-6 my-4 pl-3">
                        <span id='font' className="font-sans text-[3rem] flex justify-center items-center logoFont">Oven <h1 className='logoFont text-yellow-500'>
                            House
                        </h1></span>
                    </div>
                    <div className=" p-2 ">
                        <ul className="hidden md:flex justify-center items-center ">
                            {content.map((item, index) => (
                                <Link to={`/${item.link}`} key={index}>
                                    <li className=" group p-3 text-2xl  tracking-[2px] transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer hover:text-[#c59b5c]" key={index}>
                                        {/* <a href={`#${item.name}`}> */}
                                        <span className=' group-hover:text-[#ffce85] font-medium'>{item.name}</span>
                                        {/* </a> */}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="p-6 m-4">
                        <img src={ordernow} alt='order now' />
                    </div>
                </div>
            </div>

            {lists && <div className=" relative w-full h-[50vh] flex flex-col justify-center items-center backdrop-blur-sm bg-black/20 md:hidden z-50">
                {
                    content.map((item, index) => (
                        <Link to={`/${item.link}`} key={index} className='py-3 m-1 px-20 text-md  transform ease-in-out delay-150 tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce'>
                            <span>{item.name}</span>
                        </Link>
                    ))
                }
            </div>}
        </>
    )
}

export default Navbar
