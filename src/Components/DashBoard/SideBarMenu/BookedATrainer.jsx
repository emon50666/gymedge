import useBookedATrainer from "../../Hook/useBookedATrainer";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const BookedATrainer = () => {
    const [payments] = useBookedATrainer();
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const handleReviewSubmit = async () => {
        if (selectedPayment) {
            const reviewData = {
                email: selectedPayment.email,
                price: selectedPayment.price,
                review: reviewText,
                rating: rating,
            };

            try {
                const response = await axios.post("https://exame-12-server.vercel.app/api/reviews", reviewData);
                console.log("Review submitted successfully:", response.data);
                // Clear the form
                setReviewText("");
                setRating(0);
                toast.success('Thanks For Review')
                document.getElementById('my_modal_5').close();
            } catch (error) {
                console.error("Error submitting review:", error);
            }
        }
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Reviews</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment._id} className="bg-base-200">
                                <td>{payment.email}</td>
                                <td>{payment.price}</td>
                                <td>
                                    <button
                                        className="bg-orange-500 pl-3 pr-3 pt-1 pb-1 rounded-full text-white"
                                        onClick={() => {
                                            setSelectedPayment(payment);
                                            document.getElementById('my_modal_5').showModal();
                                        }}
                                    >
                                        Review
                                    </button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <textarea
                                                className="textarea textarea-bordered w-full mb-3"
                                                placeholder="Review"
                                                value={reviewText}
                                                onChange={(e) => setReviewText(e.target.value)}
                                            />
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                                value={rating}
                                            />
                                            <div className="modal-action">
                                                <button className="btn" onClick={handleReviewSubmit}>Submit</button>
                                                <button className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
                                            </div>
                                        </div>
                                    </dialog>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default BookedATrainer;
