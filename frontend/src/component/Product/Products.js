import React, { Fragment, useEffect, useState } from 'react'
import "./Products.css";
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getProduct } from '../../actions/productAction';
import Loader from "../layout/Loader";
import ProductCard from '../Home/ProductCard';
import Pagination from "react-js-pagination"
import { useAlert } from 'react-alert';
import MetaData from '../layout/MetaData';
import ItemCard from '../Home/ItemCard';
// import Typography from "@material-ui/core/Typography";

const categories = [
    "Chocolate Cup Cakes",
    "Red Velvet Cup Cakes",
    "Strawberry Cup Cakes",
    "Banana Cup Cakes",
    "Vanilla Cup Cakes",
    "Coffee Cup Cakes",
    "Cheese Cup Cakes",
    "Black Currant Cup Cakes",
    "Margarita Cup Cakes",
];

const Products = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { products, loading, error, productsCount, resultPerPage } = useSelector(state => state.products);
    const [currrentPage, setCurrentPage] = useState(1)
    const [category, setCategory] = useState("");

    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct(currrentPage, category))
    }, [dispatch, currrentPage, category, alert, error])

    return (
        <div>
            {loading ? <Loader /> :
                <div >
                    <MetaData title="Menu" />
                    <div className='flex flex-col md:flex-row'>
                        <div className='categoryBar'>
                            {/* <Typography>Categories</Typography> */}
                            <h1 className='text-black p-0 text-[16px] md:p-4 md:mt-32 md:text-[2rem] md:pl-20 font-bold'>Categories</h1>
                            <ul className='flex flex-row md:flex-col md:justify-start md:items-center md:w-[20rem] sticky'>
                                {categories.map((category) => (
                                    <li
                                        className='category-link'
                                        key={category}
                                        onClick={() => setCategory(category)}>
                                        {category}
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div>
                            <h2 className='productsHeading font-sans text-[3rem] flex justify-center items-center logoFont text-yellow-500 '>Menu</h2>
                            <div className='products'>
                                {products.map((product) => (
                                    <ItemCard key={product._id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                    {resultPerPage < productsCount && <div className='paginationBox'>
                        <Pagination
                            activePage={currrentPage}
                            itemsCountPerPage={resultPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText="Next"
                            prevPageText="Prev"
                            firstPageText="1st"
                            lastPageText="Last"
                            itemClass="page-item"
                            linkClass="page-link"
                            activeClass="pageItemActive"
                            activeLinkClass="pageLinkActive"
                        />
                    </div>}
                </div>}
        </div>
    )
}

export default Products
