import React from 'react'
import "./CartItemCard.css"
import { Link } from "react-router-dom"


const CartItemCard = ({ item, deleteCartItems }) => {
    return (
        <div className='CartItemCard md:gap-20'>
            <img src={item.image} alt="sasa" />
            <div>
                <Link to={`/product/${item.product}`}>
                    <span className=' text-lg md:text-4xl font-semibold '>
                        {item.name}
                    </span>

                </Link>
                <span className='text-lg pt-2'>{`Price: Rs${item.price}`}</span>
                <p onClick={() => deleteCartItems(item.product)} >Remove</p>
            </div>
        </div>
    )
}

export default CartItemCard
