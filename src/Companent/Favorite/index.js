import React from 'react';
import {useSelector} from "react-redux";
import Getprodcut from "../Product/Getprodcut";
const Favorite = () => {
    const {favorite}= useSelector(state => state.favorite)
    return (

        <div className='container'>
            <div className='flex justify-between flex-wrap'>
                {
                    favorite.map(el => <Getprodcut el={el}/>)

                }

            </div>

        </div>
    );
};

export default Favorite;