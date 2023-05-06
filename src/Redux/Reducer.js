import axios from "axios";

const inistailState = {

    product: [],

}
  export const getProduct = async (dispatch)=> {
     try{
     const respond = await axios(`https://fakestoreapi.com/products`)
          const {data} = respond
         dispatch({type:"TAKE_PRODUCT",payload: data})
     }catch (e) {
         console.log(e)
     }
  }
export const MainReducer = (state = inistailState, action) => {
    switch (action.type) {
        case "TAKE_PRODUCT":
            return {...state, product: action.payload}
        default:
            return state

    }


}