const inistailState = {
    favorite: JSON.parse(localStorage.getItem('basket')) || [],


}
 export const FavoriteReducer = (state = inistailState,action)=> {
     switch (action.type){
         case 'TASK_FAVORITE':
             const findFavorite = state.favorite.find(el => el.id === action.payload.id)
             if (findFavorite) {
                 return {...state, favorite: state.favorite.filter(el => el.id !== findFavorite.id)}
             } else {
                 return {...state, favorite: [...state.favorite, action.payload]}
             }
         default: return    state
     }

 }