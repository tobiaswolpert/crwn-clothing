import { CartActionType } from "./cart.types";

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return Object.assign({},INITIAL_STATE, {hidden: !state.hidden})
        default:
            return state;
        }
}

export default cartReducer;