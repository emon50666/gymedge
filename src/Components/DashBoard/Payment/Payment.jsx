import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51PMTc5E0ZqnSHb0uQV9uxdsATvwl2NjT6jlyUc0sFDY34GCmNrvzRoEGj8zwE2Jbw81PydoGH7My0SBXvyvm9stt002nU56egQ');

const Payment = () => {
    const { payment } = useParams();
    const [price, setPrice] = useState(null);

    useEffect(() => {
        if (payment === 'basic') {
            setPrice(10);
        } else if (payment === 'standard') {
            setPrice(50);
        } else if (payment === 'premium') {
            setPrice(100);
        }
    }, [payment]);

    return (
        <div className="container mx-auto text-center mt-10 mb-10">
            <h2 className="text-3xl font-semibold mb-10">Payment Now</h2>
            <div className="font-semibold mt-4">
                {/* Display additional information if needed */}
            </div>
            {/* Stripe elements */}
            <div>
                <Elements stripe={stripePromise}>
                    {price !== null && <CheckOutFrom price={price} />}
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
