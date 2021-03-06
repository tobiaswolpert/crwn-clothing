import { CartActionType } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils"; 

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return Object.assign({}, state, {hidden: !state.hidden})
        case CartActionType.ADD_ITEM:
            return {...state, cartItems: addItemToCart(state.cartItems, action.payload)}
        case CartActionType.DELETE_ITEM:
            return{...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)}
        case CartActionType.REMOVE_ITEM:
            return {...state, cartItems: removeItemFromCart(state.cartItems, action.payload)}
        case CartActionType.CLEAR_CART:
            return Object.assign({}, state, {cartItems: []})
        default:
            return state;
        }
}

export default cartReducer;