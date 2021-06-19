import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicshableKey = "your stripe key";

  const onToken = (token) => {
    console.log(token);
    alert("success pay");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="EC Web Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your totail is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publicshableKey}
    />
  );
};

export default StripeCheckoutButton;
