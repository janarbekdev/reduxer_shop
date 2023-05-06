const inistailState = {
    basket: JSON.parse(localStorage.getItem('basket')) || [],
}
 export  const BasketReducer = (state = inistailState ,action)=> {
     switch (action.type){
         case "TAKE_BASKET":
             const findBasket = state.basket.find(el => el.id === action.payload.id)
             if (findBasket) {
                 return {...state, basket: state.basket.map(el => el.id === findBasket.id ? {...el, quantity: el.quantity + 1} : 1)
                 }

             } else return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
         case "TAKE_MUNYS":
             const findMins = state.basket.find(el=> el.id === action.payload.id)

             if (findMins){
                 return {...state,basket: state.basket.map(el=> el.id === findMins.id ? {...el,quantity: el.quantity - 1}: 1)}
             } else {
                 return {...state,basket: [...state.basket,{...action.payload, quantity:1 }]}
             }
         case 'TAKE_DELETE':
             return {...state,basket: state.basket.filter(el=> el.id !== action.payload.id)}

         default:
             return state
     }

 }