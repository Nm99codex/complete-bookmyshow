import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const MobileTabs = () => {
    const [allTypes] = useState([
        {
            id: "home",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="a" fill="#222539" d="M22.172 7.792l-4.326 14.375-5.367-1.667c.077-.256.106-.517.093-.774l.002-.056c0-1.57-1.252-2.842-2.797-2.842-1.257 0-2.32.843-2.672 2.002l-5.277-1.638 4.35-14.368 2.052-.99 1.147 1.983 2.051-.99 1.148 1.984 2.051-.99 1.148 1.984 2.05-.991 1.148 1.984 2.052-.99 1.147 1.984zM6.353 16.005a.567.567 0 0 0 .51-.16.582.582 0 0 0 .172-.416V8.981H9.22v6.448a.572.572 0 0 0 .979.417.585.585 0 0 0 .173-.417V8.981h1.091a1.104 1.104 0 0 1 1.092 1.11v5.338a.57.57 0 0 0 .979.417.584.584 0 0 0 .173-.417V10.09c0-1.108-.781-2.053-1.856-2.245a2.21 2.21 0 0 0-.388-.035H6.46a.576.576 0 0 0-.576.585v7.033c0 .29.194.527.47.576zm8.317 3.065c.035.006.07.01.106.009.483 0 .949-.158 1.346-.456.368-.272.648-.678.812-1.175l.633-2.168 2.001-6.776a.595.595 0 0 0-.388-.741l-.041-.01c-.301-.053-.594.123-.666.4l-1.461 4.923-1.447-4.925a.593.593 0 0 0-.711-.387.593.593 0 0 0-.384.74l1.945 6.6-.594 2.013c-.14.473-.56.791-1.044.791a.57.57 0 0 0-.577.585c0 .29.194.527.47.577z"></path></svg>,
            name: "Home",
        },
        {
            id: "buzz",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="23px" viewBox="0 0 15 23"><path fill="#222539" fill-rule="evenodd" d="M6.35373 4.89117C6.18624 4.89117 6.05047 4.77552 6.05047 4.63286V0.26664C6.05047 0.119379 6.19062 0 6.36351 0C6.44566 -3.6381e-05 6.52432 0.0283189 6.58148 0.0785783C6.63865 0.128838 6.66942 0.1967 6.66677 0.26664V4.63286C6.66681 4.70284 6.63352 4.76983 6.57452 4.81852C6.51551 4.86721 6.43584 4.89343 6.35373 4.89117ZM14.5019 8.79643C14.4614 8.80704 14.4186 8.80704 14.3782 8.79643L2.08879 4.31023C2.03643 4.29014 1.99479 4.25202 1.97285 4.20409C1.94853 4.14793 1.9515 4.08495 1.98101 4.03092C2.01052 3.97689 2.06377 3.93693 2.12743 3.92105C2.16784 3.91043 2.21069 3.91043 2.2511 3.92105L14.5405 8.41432C14.5936 8.43312 14.636 8.47094 14.6579 8.51903C14.6798 8.56713 14.6792 8.62132 14.6564 8.66906C14.6348 8.73452 14.5752 8.78358 14.5019 8.79643ZM4.67102 22.49C4.62527 22.5036 4.57739 22.5036 4.53164 22.49L0.148978 20.1664C0.0866151 20.1323 0.0389482 20.0692 0.0173434 19.9919C-0.00578113 19.9178 -0.00578113 19.8363 0.0173434 19.7623C0.0534658 19.6642 0.129448 19.5948 0.218667 19.5786C0.263951 19.561 0.312762 19.561 0.358045 19.5786L4.74071 21.893C4.86714 21.9707 4.92389 22.1489 4.87235 22.3063C4.83312 22.3998 4.75805 22.4649 4.67102 22.4808V22.49ZM14.2583 9.76663L1.99833 4.93647C1.80777 4.86183 1.59263 4.8811 1.41878 4.98839C1.24494 5.09569 1.13312 5.27821 1.11756 5.48006C1.45168 7.68526 1.52031 9.92175 1.32203 12.1429C1.13723 14.3982 0.69402 16.6257 0.000878195 18.7824C-0.00543306 18.8366 0.0226953 18.8891 0.071654 18.9144C1.32989 19.5667 5.8045 21.4848 5.88314 21.5159C5.94028 21.5327 6.0021 21.5144 6.04042 21.4693C6.1163 21.3197 6.19312 21.1707 6.27087 21.0222C7.59386 21.1258 8.90765 21.2925 10.2049 21.5213C10.3177 21.5281 10.4234 21.4775 10.4669 21.3958C10.7438 20.9868 11.2268 20.3886 11.4918 20.0605C11.5907 19.938 11.6593 19.8531 11.6754 19.8297C11.7274 19.799 11.7505 19.7467 11.7338 19.6974C11.7171 19.6482 11.664 19.6117 11.5993 19.6051C11.5545 19.5993 11.5088 19.5993 11.4641 19.6051H8.51471C8.38372 19.6051 8.10273 19.5952 7.82173 19.5853C7.54074 19.5753 7.25975 19.5654 7.12876 19.5654H7.07265C8.01528 17.9343 9.0735 16.3699 10.2398 14.8841C11.5059 13.3566 12.9408 11.9736 14.5178 10.7606C14.6549 10.6062 14.7059 10.3948 14.654 10.1959C14.6021 9.99702 14.4539 9.83633 14.2583 9.76663ZM3.35093 6.79968C3.3267 8.5014 3.17424 10.199 2.89482 11.8783C2.54681 13.5558 2.1031 15.2125 1.56581 16.8405C1.56581 16.8963 1.52004 16.9415 1.46358 16.9415C1.40711 16.9415 1.36134 16.8963 1.36134 16.8405C1.76629 15.1197 2.02928 13.3693 2.14774 11.6065C2.29079 9.7952 2.25127 7.9743 2.02978 6.17068C2.0337 6.12603 2.05906 6.08595 2.09798 6.06289C2.13689 6.03983 2.18464 6.0366 2.22638 6.05419L3.15433 6.4347C3.30181 6.4921 3.38517 6.64684 3.35093 6.79968ZM7.84939 4.76415C7.87857 4.81883 7.93247 4.8606 7.99832 4.87957C8.06388 4.89926 8.13588 4.89454 8.1973 4.86654C8.25871 4.83854 8.30407 4.78973 8.32263 4.73168L9.76581 1.28097C9.8157 1.16627 9.75085 1.03797 9.61987 0.992237C9.48555 0.949651 9.33688 1.00949 9.28745 1.12604L7.84428 4.59084C7.81837 4.64675 7.82022 4.70947 7.84939 4.76415ZM9.85089 5.79509C9.75985 5.68972 9.75985 5.52014 9.85089 5.41477L12.3174 2.0342C12.4095 1.93001 12.5577 1.93001 12.6497 2.0342C12.693 2.08338 12.7174 2.15031 12.7174 2.22013C12.7174 2.28994 12.693 2.35687 12.6497 2.40606L10.1832 5.78664C10.0932 5.8932 9.94497 5.89697 9.85089 5.79509Z"></path></svg>,
            name: "Buzz",
        },
        {
            id: "profile",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#222539" d="M12 11.044a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zM8.5 12h7a4.5 4.5 0 0 1 4.5 4.5V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.5A4.5 4.5 0 0 1 8.5 12z"></path></svg>,
            name: "Profile",
        }
    ]);

    const [navelements] = useState([
        {
            name: "Movies",
            icon: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/movies-v3-collection-202101080832.png"
        }, {
            name: "Stream",
            icon: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/stream-v3-new-tag-collection-202102040316.png"
        },
        {
            name: "Events",
            icon: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/events-v3-collection-202101080832.png"
        }, {
            name: "Sports",
            icon: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/sports-v3-collection-202101080832.png"
        }, {
            name: "Plays",
            icon: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/plays-v3-collection-202101080832.png"
        }, {
            name: "Activities",
            icon: "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/activities-v3-collection-202101080832.png"
        },

    ])

    const { type } = useParams();

    return (
        <>
            <div className="lg:hidden bg-white flex justify-between">
                {navelements.map((item) => (
                    <Link to={`${item.name}`} className="w-1/4">
                        <div className="flex text-center flex-col relative items-center text-xl ">
                            <div className="w-16">
                                <img src={item.icon} alt="" />
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
            <div className="lg:hidden bg-white shadow-lg fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly border">
                {allTypes.map((item) => (
                    <Link key={item.id} to={`/${item.id}`} className="w-1/4">
                        <div
                            className={
                                type === item.id
                                    ? "flex text-center flex-col relative items-center text-xl bg-red-600"
                                    : "flex text-center flex-col items-center text-xl"
                            }
                        >
                            <div
                                className={
                                    type === item.id
                                        ? "w-full h-full border-t-2 p-3 flex flex-col items-center"
                                        : "flex flex-col items-center"
                                }
                            >
                                <div className="w-8 h-full">

                                    {item.icon}
                                </div>
                                <div className="text-sm text-black no-underline items-center">{item.name}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

const LargeTabs = () => {


    const { type } = useParams();

    return (
        <>
            < div className="hidden lg:inline" >
                <div className='flex justify-between bg-black px-6'>
                    <div className='flex space-x-4 bg-black no-underline'>
                        <a className="no-underline text-white">Movies</a>
                        <a className="no-underline text-white">Stream</a>
                        <a className="no-underline text-white">Events</a>
                        <a className="no-underline text-white">Plays</a>
                        <a className="no-underline text-white">Sports</a>
                        <a className="no-underline text-white">Activities</a>
                        <a className="no-underline text-white">Buzz</a>
                    </div>
                    <div className='flex space-x-4 bg-black no-underline'>
                        <a className="no-underline text-white">LiveYourShow</a>
                        <a className="no-underline text-white">Stream</a>
                        <a className="no-underline text-white">Events</a>
                        <a className="no-underline text-white">Plays</a>
                    </div>
                </div>
            </div >
        </>
    );
};

function Navbar() {
    return (
        <>
            <div>
                <MobileTabs />
                <LargeTabs />
            </div>
        </>
    );
}

export default Navbar;

// NOTE
// Key inside map()
// Whenever looping through array using map()
// It needs to know that each element it is rendering is different
// from the rest of the elemets present in the array.
// So we need to specify a key (propery) in the parent of the rendered element.
// you can use the index property inside array.map((singleEmelentInstance, index) => {});
// Index is just representing the current position of the element in the mapped array