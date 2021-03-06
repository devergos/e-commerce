import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, cartLength }) => (
    <div onClick={toggleCartHidden} className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartLength}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    cartLength: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
