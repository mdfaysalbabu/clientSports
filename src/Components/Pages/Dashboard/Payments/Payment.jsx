import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const d=useParams()
  console.log(d);
  const info=useLoaderData();
  // console.log(info);

  
  return (
    <div className=" w-full">
      <div className="text-center">
        <h2 className="text-3xl text-center">Payment Here</h2>
        <div className="ps-40">
          <Elements stripe={stripePromise}>
            <CheckoutForm price={info.price} info={info} ></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
