import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import GetBasket from "./getBasket";

const Basket = () => {

      const {basket} = useSelector(state => state.basket)

    return (
        <div>
            {
                basket.map(el=> (
                    <GetBasket el={el} />
                ))

            }

        </div>
    );
};

export default Basket;