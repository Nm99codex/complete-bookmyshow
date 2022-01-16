import React from 'react'
import Navbar from "../components/Navbar/index"
import SliderImages from '../components/SliderImages'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/Movies/MovieCard"
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../components/Slider/CaraouselArrow"

//redux Actions
import { getmovies } from "../redux/reducers/movies/movies.action"
import Premieres from '../components/Premieres';
import Footer from '../components/Footer';

function HomePage() {

    const Premiers = [
        {
            title: "Venom 2",
            image: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-rvwldkjbqk-portrait.jpg"
        },
        {
            title: "Fast 9",
            image: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-zftjbeevvq-portrait.jpg"
        },
        {
            title: "Dune",
            image: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg"
        },
        {
            title: "Shane",
            image: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00318498-dsrcdelzuj-portrait.jpg"
        },
        {
            title: "GhostBusters",
            image: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00119705-bvpfcjxsyv-portrait.jpg"
        }
    ]

    const settings = {
        className: "center",
        centerMode: true,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
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


    const dispatch = useDispatch();

    const reduxState = useSelector((store) => {
        console.log(store)
        return store.movies.movies;
    })

    useEffect(() => {
        dispatch(getmovies());
    }, [])

    return (
        <>
            <Navbar />
            <div className=' text-2xl font-bold pt-3 pb-3'>
                Recommended Movies
            </div>
            <div className='flex justify-between pb-1 lg:px-8'>
                {reduxState.map((reduxState) => {
                    return <MovieCard  {...reduxState} key={reduxState._id} />
                })}
            </div>

            <div className=' text-2xl font-bold pt-24 '>
                The Best of Entertainment
            </div>
            <SliderImages />

            <div className=' lg:block w-full h-4 bg-indigo-900'>
                <div style={{ backgroundColor: "rgb(44 49 72)" }}>
                    <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' className='w-full pb-3 ' />
                </div>
                <div className="" style={{ backgroundColor: "rgb(44 49 72)" }}>
                    <Slider {...settings}>
                        {Premiers.map((movies) => (
                            <Premieres {...movies} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default HomePage
