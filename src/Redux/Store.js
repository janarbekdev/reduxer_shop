import {applyMiddleware, combineReducers, createStore} from "redux";
import {MainReducer} from "./Reducer";
import {FavoriteReducer} from "./FavoriteReducer";
import {BasketReducer} from "./BasketReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store= createStore(combineReducers({
      main:MainReducer,
      favorite: FavoriteReducer,
      basket: BasketReducer,
}),composeWithDevTools(applyMiddleware(thunk)))
// composeWithDevTools(applyMiddleware(thunk))