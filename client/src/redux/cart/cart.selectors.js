import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItems = createSelector(
    [selectCart], 
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
        cartItems => cartItems.reduce(
        (previous,cartItem) => 
        previous + cartItem.quantity,
        0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total, item)=> total+item.price*item.quantity,0)
)