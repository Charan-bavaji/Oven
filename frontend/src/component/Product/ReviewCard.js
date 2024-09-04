import React from 'react'
import { Rating } from "@material-ui/lab";
// import ReactStars from "react-rating-stars-component";
import profilePng from "../../images/Profile.png"


const ReviewCard = ({ review }) => {

    const options = {
        value: review.rating,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <div className="reviewCard">
            <img src={profilePng} alt="User" width={100} />
            <p className='text-2xl text-black p-0'>{review.name}</p>
            < Rating {...options} />
            <span className="text-lg text-black p-0">{review.comment}</span>
        </div>
    );
};

export default ReviewCard;
