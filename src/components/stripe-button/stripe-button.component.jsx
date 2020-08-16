import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutComponent = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51HGra8L93oRFeU3xRBXZ4ZPxMW46sy7GOUqLg9kuwSoGv1xvSNJz3vT8o5PR2N0kPLJvS34gLfYxVdo4NDecO8Ta00kbslAa7O';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutComponent;
