import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutComponent from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantitiy</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className="total">Total: ${cartTotal}</div>
		<div className="test-warning">
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 | Exp: 12/20 | cvv: 123
		</div>
		<StripeCheckoutComponent price={cartTotal} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems,
	cartTotal : selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
