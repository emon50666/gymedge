import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAuth from "../../Hook/useAuth";
import toast, { Toaster } from "react-hot-toast";

const CheckOutFrom = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth()
    const [clientSecret, setClientSecret] = useState('');
    const axiosPublic = useAxiosPublic();
    const [error,setError] = useState('');

    useEffect(()=>{
        if(price > 0){
            axiosPublic.post('/create-payment-intent',{price})
          .then(res =>{
              setClientSecret(res.data.clientSecret)
              console.log(res.data.clientSecret);
          })
        }
      },[axiosPublic,price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if(card === null){
            return;
        }


        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error',error);
            setError(error.message)
        } else{
            console.log('payment method',paymentMethod);
            setError('')
        }

        // Handle payment processing here with `price`
        console.log("Processing payment of", price);

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if(confirmError){
            console.log('confirm Error',confirmError);
        } 
        else{
            console.log('payment intent',paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('transactionId',paymentIntent.id);
               
                toast.success('payment successfully')
                const payment = {
                    email: user?.email,
                    price: price,
                    date: new Date()
                }
               const res = await axiosPublic.post('/payments',payment)
               console.log('payment save',res);
            
            }
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
             options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
            <button type="submit" className="btn bg-orange-500 text-white" disabled={!stripe || !clientSecret}>
                confirm ${price}
            </button>
            <p className="text-red-500 text-sm">{error} </p>
            <Toaster></Toaster>
        </form>
        
    );
};

export default CheckOutFrom;
