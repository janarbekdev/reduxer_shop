import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsFillBasketFill} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const Getprodcut = ({el}) => {

    const [baskets, setInBasket] = useState(false)
    const {favorite} = useSelector(state => state.favorite)
    const {basket} = useSelector(state => state.basket)

    const heart = favorite.some(some => some.id === el.id)
     const nav = useNavigate()
    const into = () => {

        setInBasket(!baskets)

    }



    const AddFavorite = () => {
        let onfavorite=[...favorite,{...el,quality:1}]
         localStorage.setItem('favorite',JSON.stringify(onfavorite))
        dispatch({type: "TASK_FAVORITE", payload: el})

    }


    const dispatch = useDispatch()
    const AddBasket = () => {
    let   baskets = [...basket,{...el,quantity:1}]
         localStorage.setItem('basket', JSON.stringify(baskets))
        dispatch({type: "TAKE_BASKET", payload: el})
    }
   const AddTask = ()=> {
         dispatch({type:"TAKE_TASK",payload : el})
   }

    return (

        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={el.image} alt="img"/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {el.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
                <button onClick={AddTask} type="button"
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Blue
                </button>

                {
                    baskets ? <button onClick={()=>nav(`/basket`)}
                                     className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">

                            <BsFillBasketFill/>

                        </button> :


                        <button onClick={() => {
                            AddBasket() || into()
                        }}
                                className="inline-flex px-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {el.image}
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>

                }


                        <button  onClick={AddFavorite}

                                        className="text-white mt-2  bg-red-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <AiOutlineHeart/>
                    </button>





            </div>
        </div>

    );
};

export default Getprodcut;