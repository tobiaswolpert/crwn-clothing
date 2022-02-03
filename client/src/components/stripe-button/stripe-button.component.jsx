import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KJIyQDix1Ss8VfSoYCyroyoRDoe59R2VsqlxnFiclGn5F1OX3dbI2dDjM8tTc0XblctQOSM3HwbyH6B3ctPJeUU00Nu7Qzgkk';

    const onToken = token => {
        axios({
            url: 'http://localhost:5000/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment Successful');
            console.log(response);
        })
        .catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('Error, payment did not work');
        });
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