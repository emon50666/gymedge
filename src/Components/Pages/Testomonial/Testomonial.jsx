import { useEffect,  } from "react";
import Glide from "@glidejs/glide";
import ReactStars from "react-rating-stars-component";
import '@smastrom/react-rating/style.css';
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Testomonial = () => {
    const axiosPublic = useAxiosPublic();

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviews`);
            console.log(res.data);
            return res.data;
        }
    });

    useEffect(() => {
        let slider;
        if (reviews.length > 0) {
            slider = new Glide(".glide-04", {
                type: "slider",
                focusAt: "center",
                perView: 1,
                animationDuration: 700,
                gap: 0,
                classes: {
                    nav: {
                        active: "[&>*]:bg-wuiSlate-700",
                    },
                },
            }).mount();
        }

        return () => {
            if (slider) slider.destroy();
        };
    }, [reviews]);

    return (
        <div className="bg-orange-100/50">
            <h1 className="text-3xl pt-8 mb-5 md:text-4xl text-center font-bold">WHAT CLIENTS SAY</h1>
            <span className='border-b-4 mb-10 m-auto text-center border-orange-500 w-[60px] mt-2 flex'></span>
            <div className="glide-04 relative w-full pb-5">
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        {reviews && reviews.map((review, index) => (
                            <li key={index} className="justify-center md:flex items-center">
                                <div className="shadow-lg p-3 mx-auto justify-center bg-white shadow-orange-300/30 rounded-lg mb-5 border border-orange-500">
                                    <img src={'#'} alt="" className="w-20 rounded-full bg-orange-500 p-2" />
                                    <div className="px-4 md:text-start">
                                        <h1 className="font-bold">{review.email}</h1>
                                        <p className="md:w-[500px]">{review.review}</p>
                                        <div className="flex items-center">
                                            <ReactStars
                                                count={5}
                                                value={review.rating}
                                                size={24}
                                                isHalf={true}
                                                edit={false}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                            <span className="ml-2">{review.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex w-full items-center justify-center gap-2 p-4" data-glide-el="controls">
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-orange-500 bg-white/20 text-orange-500 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                            <title>prev slide</title>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                    </button>
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-orange-500 bg-white/20 text-orange-500 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir=">"
                        aria-label="next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                            <title>next slide</title>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testomonial;
