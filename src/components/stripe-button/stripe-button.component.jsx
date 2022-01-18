import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KJIyQDix1Ss8VfSoYCyroyoRDoe59R2VsqlxnFiclGn5F1OX3dbI2dDjM8tTc0XblctQOSM3HwbyH6B3ctPJeUU00Nu7Qzgkk';

    const onToken = token => {
        console.log(token);
        alert('Payment Succeeded')
    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.' 
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey= {publishableKey}
        />
            )
}

export default StripeCheckoutButton
