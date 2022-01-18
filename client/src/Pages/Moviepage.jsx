import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from "../components/Navbar/index";
import { GiSelfLove } from 'react-icons/gi';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../components/Slider/CaraouselArrow';
import Review from '../components/Reviews/Review';
import MovieCard from '../components/Movies/MovieCard';
import { IoIosArrowForward } from "react-icons/io"
import MovieCardLike from '../components/Movies/MovieCardLike';
import razorPay from 'razorpay'


//redux
import { getSpecificmovie } from '../redux/reducers/movies/movies.action';
import { getmovies } from '../redux/reducers/movies/movies.action';

function Moviepage() {

    // const reduxStateCart = useSelector((globalState) => globalState.cart.cart);
    // const reduxStateUser = useSelector(
    //     (globalState) => globalState.user.user.user
    // );

    const payNow = () => {
        let options = {
            key: "rzp_test_4eVpNXfCd8V6jV",
            amount:
                400,
            currency: "INR",
            name: "Zomato Master",
            description: "Fast Delivery Service",
            image:
                "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
            handler: (data) => {
                alert("Payment Successful");
                console.log(data);
            },
            prefill: {
                name: "hgh",
                email: "jhghjghj",
            },
            theme: {
                color: "#e23744",
            },
        };

        const razorPay = new window.Razorpay(options);
        razorPay.open();
    };



    const cast = [
        "https://th.bing.com/th/id/R.7b528d6309ee84dc0d8fbffef7cc9347?rik=o5c5sfAZyc8IYg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f11%2fuser-icon_291700.jpg&ehk=fHg%2b5OocbzHvhnd4uHQgbLbzHw7cwTG4GXD1aIrXnts%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.7b528d6309ee84dc0d8fbffef7cc9347?rik=o5c5sfAZyc8IYg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f11%2fuser-icon_291700.jpg&ehk=fHg%2b5OocbzHvhnd4uHQgbLbzHw7cwTG4GXD1aIrXnts%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.7b528d6309ee84dc0d8fbffef7cc9347?rik=o5c5sfAZyc8IYg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f11%2fuser-icon_291700.jpg&ehk=fHg%2b5OocbzHvhnd4uHQgbLbzHw7cwTG4GXD1aIrXnts%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.7b528d6309ee84dc0d8fbffef7cc9347?rik=o5c5sfAZyc8IYg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f11%2fuser-icon_291700.jpg&ehk=fHg%2b5OocbzHvhnd4uHQgbLbzHw7cwTG4GXD1aIrXnts%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.7b528d6309ee84dc0d8fbffef7cc9347?rik=o5c5sfAZyc8IYg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f11%2fuser-icon_291700.jpg&ehk=fHg%2b5OocbzHvhnd4uHQgbLbzHw7cwTG4GXD1aIrXnts%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.7b528d6309ee84dc0d8fbffef7cc9347?rik=o5c5sfAZyc8IYg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f11%2fuser-icon_291700.jpg&ehk=fHg%2b5OocbzHvhnd4uHQgbLbzHw7cwTG4GXD1aIrXnts%3d&risl=&pid=ImgRaw&r=0"
    ]


    const settings = {
        className: "center",
        centerMode: true,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerPadding: "10px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };

    const settingReview = {
        className: "center",
        centerMode: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        speed: 500,
        centerPadding: "10px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [movies, setMovies] = useState({ movies: [] })
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        dispatch(getSpecificmovie(id))
    }, [])

    const details = useSelector((store) => store.movies.selectedmovies)

    useEffect(() => {
        dispatch(getmovies());
    }, [])
    const reduxState = useSelector((store) => {
        console.log(store)
        return store.movies.movies;
    })

    return (
        <>
            <div className='hidden lg:block'>
                <Navbar />
            </div>
            <div className='flex justify-around py-5 px-7 bg-black'>
                <div className=" rounded-lg h-96 text-md text-black font-semibold">
                    <img src={details.image} className=' h-full rounded-lg ' alt="" />
                </div>
                <div>
                    <div className="text-5xl font-semibold  text-white pb-6">
                        {details.title}
                    </div>

                    <div className="flex bg-black">
                        <div className="flex justify-center mr-3">
                            <div className="pt-1 pl-2 pr-2 text-4xl text-red-400">
                                <GiSelfLove />
                            </div>
                            <div className=" text-white text-2xl pt-1"> {details.likes}%</div>
                        </div>
                        <div className='flex justify-center'>
                            <div className="text-white text-lg pt-2">{details.Votes} Ratings</div>
                            <div className='text-white  text-lg pt-3'>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-600 mt-3 px-4 py-2 flex justify-between text-white rounded-xl space-x-6">
                        <div>
                            <div className="text-lg font-semibold">
                                Add your rating and review
                            </div>
                            <div>
                                Your ratings matter
                            </div>
                        </div>
                        <button className="px-2 py-0 font-semibold text-black text-lg bg-white rounded-xl">
                            Rate now
                        </button>
                    </div>
                    <div className='text-black flex mt-2 '>
                        <button className='rounded-md font-semibold bg-white p-1.5 mr-8'>
                            IMAX 3D
                        </button>
                        <button className='rounded-md font-semibold bg-white p-1.5  mr-8'>
                            English, Hindi , Tamil ,Telugu
                        </button>
                    </div>

                    <div className='text-white font-semibold mt-2'>
                        2h 59m  . Action, Thriller . UA . 17 Dec, 2021
                    </div>

                    <button onClick={payNow} className='bg-red-500 px-20 py-3 items-center text-white font-semibold rounded-xl mt-2'>
                        Buy Rs.{details.Cost}/-
                    </button>
                </div>
            </div>
            <div className='text-2xl font-bold py-8 px-5'>
                About the movie
                <div className="text-base font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis earum, corporis culpa minima consequatur molestiae, dignissimos, recusandae nisi inventore ducimus tempora amet! Deleniti culpa expedita recusandae ex unde et.</div>
            </div>
            <hr />
            <div className='text-2xl font-bold py-8 px-5'>
                Cast
                <div className="w-3/4">
                    <div className="">
                        <Slider {...settings}>
                            {cast.map(cast => {
                                return (
                                    <>
                                        <img src={cast} alt="" className='rounded-full  shadow-xl' />
                                        <div className='flex justify-center text-base font-semibold'>
                                            <div className='class'>{details.actor}</div>
                                        </div>
                                    </>

                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
            <hr />
            <div className='text-2xl font-bold py-8 px-5'>
                Crew
                <div className="w-3/4">
                    <div className="">
                        <Slider {...settings}>
                            {cast.map(cast => {
                                return <img src={cast} alt="" className='rounded-full  shadow-xl' />
                            })}
                        </Slider>
                    </div>
                </div>
            </div>

            <hr />

            <div className='text-2xl font-bold py-8 px-5 w-3/5'>
                <div className='flex justify-between'>
                    <div className='pb-3 '>
                        Top Reviews
                    </div>
                    <div className='text-red-600 pt-2 text-lg'>
                        700k Reviews
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <Slider {...settingReview}>
                            {cast.map(cast => {
                                return <Review />
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='text-2xl font-bold py-8 px-5'>
                <div className='flex justify-between'>
                    <div className='pb-3 '>
                        You may also like
                    </div>
                    <div className='text-red-600 pt-2 text-lg'>
                        View All
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <Slider {...settings}>
                            {reduxState.map((reduxState) => {
                                return <MovieCardLike  {...reduxState} key={reduxState._id} />
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Moviepage
