import React, { Fragment, useEffect } from 'react'
// import { CgMouse } from "react-icons/all";
import "./Home.css";
// import Product from "./ProductCard.js"
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader"
import { useAlert } from 'react-alert';
import ProductCard from './ProductCard.js';
import { Link } from 'react-router-dom';
import Hero from './Hero.js';
import ItemCard from './ItemCard.js';



const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products,
    } = useSelector(
        (state) => state.products);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);

    return (
        <Fragment>

            {loading ? (<Loader />) : <Fragment>

                <MetaData title="Furnitures" />
                <Hero />
                <div className="text-gray-600 w-full h-auto flex justify-center items-center flex-col " >
                    <div className='w-full md:w-[80%] flex flex-col justify-center items-center text-2xl text-center gap-4 py-10 tracking-wide '>
                        <span>We've got unlimited reason for you to love us - mouth-watering pizzas, exciting appetizers, and tasty desserts! If you're craving for delicious food, we've got just the thing for you!</span>
                        <span>Visit Us and Explore Best Pizza!</span>
                        <span>A Venture by MILLENNIAL HOSPITALITY VENTURES PRIVATE LIMITED</span>
                    </div>
                </div>
                <h2 className="homeHeading">IN THE <b className='text-orange-400'>TOP</b>PINGS</h2>

                <div className="container" id="container">

                    {/* {products && products.map((product) => <ProductCard key={product._id} product={product} />)} */}
                    {products && products.map((product) => <ItemCard key={product._id} product={product} />)}
                </div>
                <div className='w-full flex justify-center items-center'>
                    <Link to={"/products"} className="px-10 py-3 text-lg rounded-xl text-black  bg-orange-400 font-semibold tracking-wider">
                        Menu
                    </Link>

                </div>
            </Fragment>}
        </Fragment>
    );
};

export default Home;
