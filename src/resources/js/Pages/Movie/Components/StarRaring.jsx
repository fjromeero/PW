import Star from "./Star";
import { useState } from "react";

export default function StarRating({score ,setData}){

    return (
        <>
            <h3 className="text-center  mt-4 text-lg text-gray-900">Select your score for this movie</h3>
            <div className="flex justify-center pt-3 pb-5">
                {
                    [...Array(10)].map((x,i) => <Star key={i} id={i+1} className={score<=i ? 'text-gray-400' : 'text-yellow-500'} setData={setData} />)
                }
            </div>
        </>
    );
}