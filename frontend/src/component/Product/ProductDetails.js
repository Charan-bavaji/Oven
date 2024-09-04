import React, { Fragment, useEffect, useState } from 'react';
// import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails, newReview } from '../../actions/productAction';
import { useParams } from 'react-router-dom';
import ReviewCard from "./ReviewCard"
import Loader from '../layout/Loader';
import { useAlert } from "react-alert";
import MetaData from '../layout/MetaData';
import { addItemsToCart } from "../../actions/cartAction";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstant";
import item1 from "../../images/Home-Banner-Pizza.png"
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { id } = useParams();
    const { product, loading, error } = useSelector((state) => state.productDetails);

    const { success, error: reviewError } = useSelector(
        (state) => state.newReview
    );

    const [quantity, setQunatity] = useState(1);
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const increaseQuantity = () => {
        if (product.stock <= quantity) return;
        const qty = quantity + 1;
        setQunatity(qty);
    }
    const decreaseQuantity = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQunatity(qty);
    }

    const addToCartHandler = () => {
        dispatch(addItemsToCart(id, quantity));
        alert.success("Item Added To Cart");
    }

    const submitReviewToggle = () => {
        open ? setOpen(false) : setOpen(true);
    };

    const reviewSubmitHandler = () => {
        const myForm = new FormData();

        myForm.set("rating", rating);
        myForm.set("comment", comment);
        myForm.set("productId", id);

        dispatch(newReview(myForm));

        setOpen(false);
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (reviewError) {
            alert.error(reviewError);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success("Review Submitted Successfully");
            dispatch({ type: NEW_REVIEW_RESET });
        }

        dispatch(getProductDetails(id));
    }, [dispatch, id, error, alert, reviewError, success]);

    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };
    console.log(quantity);


    return (
        <Fragment>
            {loading ? (<Loader />) : (<Fragment>
                <MetaData title={`${product.name}---Myntra`} />

                <div className=" w-full h-auto flex justify-baseline items-center flex-col bg-no-repeat text-black">
                    <div className=" w-[95%] h-[auto] py-6  flex justify-center items-center rounded-2xl md:w-[80%]">
                        <div className="flex justify-center items-center flex-col p-5 gap-[3rem] md:flex-row sm:gap-[1rem] md:gap-[10rem]">
                            <div className=" max-w-sm max-h-fit lg:max-w-lg  overflow-hidden ">
                                {product.images && product.images.map((item, i) => (
                                    <img key={i} src={item.url} alt='img' width={400} height={400} />
                                ))}
                            </div>
                            <div className="max-w-sm  flex justify-start items-start flex-col gap-6 sm:gap-5 md:gap-7 lg:max-w-md xl:max-w-2xl xl:p-5">
                                <div className=''>
                                    <span className=" mb-[-3px] text-xs text-gray-600 tracking-[1px] lg:text-xs">{product._id}</span>
                                    {/* <span className=" text-3xl text-[#c59b5c] font-bold md:text-4xl lg:text-5xl xl:text-7xl">{product.name}</span> */}
                                    <h1 className=' text-3xl font-[900] text-[#000000] lg:py-6 tracking-[1px] md:text-4xl lg:text-5xl xl:text-6xl '>{product.name}</h1>
                                    <div className="detailsBlock-2">
                                        <Rating {...options} />
                                        <span className='detailsBlock-2-span'>
                                            {product.numOfReviews} (Reviews)
                                        </span>
                                    </div>
                                    <p className=" text-[10px] lg:text-[16px] lg:pb-4 tracking-wider font-light leading-normal border-b-2">
                                        {product.description}</p>
                                    <h1 className=' font-bold text-yellow-400 text-3xl'>{`₹${product.price}`}</h1>
                                    <div className="detailsBlock-3-1 border-b-2">
                                        <div className="detailsBlock-3-1-1 flex ">
                                            <button onClick={decreaseQuantity} >-</button>
                                            <h1 className='px-10 text-black text-3xl'>{quantity}</h1>
                                            <button onClick={increaseQuantity} >+</button>
                                        </div>
                                        <button disabled={product.stock < 1 ? true : false} onClick={addToCartHandler}>
                                            Add to Cart
                                        </button>
                                    </div>
                                    <span className='flex gap-2'>
                                        <p>Status:</p>
                                        <p className={product.stock < 1 ? "redColor" : "greenColor"}>
                                            {product.stock < 1 ? "OutOfStock" : "InStock"}
                                        </p>
                                    </span>
                                    <Dialog
                                        aria-labelledby="simple-dialog-title"
                                        open={open}
                                        onClose={submitReviewToggle}
                                    >
                                        <DialogTitle>Submit Review</DialogTitle>
                                        <DialogContent className="submitDialog">
                                            <Rating
                                                onChange={(e) => setRating(e.target.value)}
                                                value={rating}
                                                size="large"
                                            />

                                            <textarea
                                                className="submitDialogTextArea"
                                                cols="30"
                                                rows="5"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                            ></textarea>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={submitReviewToggle} color="secondary">
                                                Cancel
                                            </Button>
                                            <Button onClick={reviewSubmitHandler} color="primary">
                                                Submit
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    <div>
                                        <button onClick={submitReviewToggle} className="submitReview">
                                            Submit Review
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Example /> */}
                </div>
                {product.reviews && product.reviews[0] ? (
                    <div className='reviews'>
                        {product.reviews &&
                            product.reviews.map((review) => <ReviewCard review={review} />)} </div>
                ) : (
                    <p className='noReviews'>NO Reviews Yet</p>
                )}
            </Fragment >)
            }
        </Fragment>
    )
}

export default ProductDetails;
