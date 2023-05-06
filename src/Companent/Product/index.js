import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Getprodcut from "./Getprodcut";
import {getProduct} from "../../Redux/Reducer";

const Product = () => {

  const {product} = useSelector(state => state.main)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getProduct)
    })
    return (

        <div className='flex flex-wrap gap-4 px-20 py-28'>
            {
                product.map(el=> (
                    <Getprodcut el={el} />
                ))
            }
        </div>
    );
};

export default Product;