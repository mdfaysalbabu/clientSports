import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/Authprovider";
import axios from "axios";
import "./CheckoutForm.css";
import Swal from "sweetalert2";

const CheckoutForm = ({ price,info}) => {
  const {seats,enrolledStudents,classId,_id,name,image}=info;
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const token = localStorage.getItem("total-token");

  useEffect(() => {
    if (price > 0) {
      axios
        .post(
          "https://sports-academy-server-pi.vercel.app/create-payment-intent",
          { price },
          {
            headers: {
              authorization: `bearer${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price, token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);
    const {
      paymentIntent,
      error: confirmError,
    } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "unknown",
          name: user?.displayName || "anonymous",
        },
      },
    });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        cartId:_id,
        name:name,
        email: user?.email,
        transactionId: paymentIntent.id,
        seats:seats,
        enrolledStudents:enrolledStudents,
        classId:classId,
        photo:image,
        price:info.price
      };
      axios.post("https://sports-academy-server-pi.vercel.app/payments", payment, {
          headers: {
            authorization: `bearer ${token}`,
          },
        })
        .then((data) => {
          console.log(data);
          if (data.data.insertResult.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `done`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };
  return (
    <div>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className=" btn btn-primary btn-sm mt-4"
          type="submit"
          
        >
          Payment
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
