import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}


const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return Object.assign({}, state, {isFetching: true})
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return Object.assign({}, state, {collections: action.payload, isFetching: false})
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return Object.assign({}, state, {isFetching: false, errorMessage: action.payload})
        default: 
            return state;
    }
}

export default shopReducer;