import React from "react";
import './checkout-item.styles.scss';
import { connect } from "react-redux";
import { deleteItem, addItem, removeItem } from "../../redux/cart/cart.actions";


const CheckOutItem = ({ item, deleteItem, addItem, removeItem }) => {
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={item.imageUrl} alt='item' />
        </div>
        <span className="name">{item.name}</span>
        <span className="quantity">
            <div onClick={()=> removeItem(item)} className="arrow">&#10094;</div>
            <span className="value">{item.quantity}</span>
            <div onClick={()=>addItem(item)} className="arrow">&#10095;</div>
        </span>
        <span className="price">{item.price}</span>
        <div className="remove-button" onClick={()=>deleteItem(item)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckOutItem);