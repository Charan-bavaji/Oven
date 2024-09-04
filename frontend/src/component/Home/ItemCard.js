import React from 'react'
import item from "../../images/Home-Banner-Pizza.png"
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ItemCard = ({ product }) => {
    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <Link to={`/product/${product._id}`}>
            <div className='w-[20rem] h-auto border-2 p-3 rounded-3xl group cursor-pointer '>
                <div className='flex justify-center items-center flex-col '>
                    <div className='p-6 bg-orange-200 rounded-3xl group-hover:bg-orange-400 transition-colors duration-300 ease-in-out'>
                        <img src={product.images[0].url} alt={product.name} width={300} className='group-hover:rotate-45 transition duration-300 ' />
                    </div>
                    <div className='text-black'>
                        <h1 className='text-xl font-bold p-1 '>
                            {product.name}
                        </h1>
                        <span className='text-sm'>
                            <p className='text-sm p-1 m-0 w-full'>In house burger bun filled with a fried chicken patty, tomatoes, lettuce, onions and thousand</p>
                        </span>
                        <Rating {...options} />{" "}
                        <span className='p-1 text-xl font-extrabold text-yellow-500'>{`₹${product.price}`}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard
