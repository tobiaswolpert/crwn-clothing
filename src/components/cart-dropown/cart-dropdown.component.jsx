import React from "react";
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { Link, withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
 

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
    return (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? cartItems.map(cartItem=> 
                (<CartItem key={cartItem.id} item={cartItem}/>)) : 
                <span className="empty-message">Your cart is empty</span>}
                   
        </div>
            <Link to='/checkout'>
                <CustomButton onClick={toggleCartHidden} className="custom-button">GO TO CHECKOUT</CustomButton>
            </Link>
        </div>
)
            }

const mapStateToProps = state => {
    return{
    cartItems: selectCartItems(state)
}}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()) 
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));