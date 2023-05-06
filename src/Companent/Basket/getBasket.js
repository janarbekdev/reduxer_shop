import React from 'react';
import {useDispatch} from "react-redux";
import {AiFillDelete} from "react-icons/ai";

const GetBasket = ({el}) => {
    const dispatch = useDispatch()
    const onMinus = ()=> {
        dispatch({type:'TAKE_MUNYS',payload:el })
    }
    const AddDelete = () => {
        dispatch({type: "TAKE_DELETE", payload: el})
    }
     const onPlus = ()=> {

          dispatch({type:"TAKE_BASKET",payload:el})
     }

    return (
        <div>


            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 rounded-l-lg">
                            <img src={el.image} width='10%' alt="img"/>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {el.description}
                        </th>
                        <th scope="col" className="px-6 py-3">

                            {el.countInStock}

                        </th>
                        <th className=''>
                            <div className='flex justify-between  '>
                                <h1  style={{fontSize:"24px",color:'blue'}} onClick={onMinus}> -</h1><span>{el.quantity}</span> <h1 onClick={onPlus} style={{fontSize:"24px",color:'blue'}} >+</h1>

                            </div>

                        </th>
                        <th scope="col" className="px-6 py-3 rounded-r-lg">

                            {el.price}

                        </th>
                        <th scope="col" className="px-6 py-3 rounded-r-lg">


                            <button onClick={AddDelete}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
                                dark:focus:ring-blue-800"><AiFillDelete/>
                            </button>
                        </th>


                    </tr>
                    </thead>

                </table>
            </div>


        </div>
    );
};

export default GetBasket;