import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ total, cartItems }) => { 
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-blocks'>
                    <span>Product</span>
                </div>

                <div className='header-blocks'>
                    <span>Description</span>
                </div>

                <div className='header-blocks'>
                    <span>Quantity</span>
                </div>

                <div className='header-blocks'>
                    <span>Price</span>
                </div>

                <div className='header-blocks'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item=><CheckOutItem key={item.id} item={item}/>)}
            
            <div className='total'>
                <span>Total: ${total}</span>
            </div>
        <StripeCheckoutButton price={total}/>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage)