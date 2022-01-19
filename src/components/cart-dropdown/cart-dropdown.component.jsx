import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem}></CartItem>;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return { cartItems };
};

export default connect(mapStateToProps)(CartDropdown);