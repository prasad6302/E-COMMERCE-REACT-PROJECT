import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { SliderData } from "../ProjectData/Carousel";
export default function Carousel() {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
    };
    return (
        <div className="bg-blue-50 py-10 overflow-hidden">

            <Slider {...settings}>
                {SliderData.map((item) => (
                  <div class="">
                        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-8">
                            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">

                                <h2 className="text-3xl md:text-7xl font-bold">{item.title}</h2>
                                <p className="text-gray-600 text-base md:text-lg">{item.desc}</p>
                                <button className=" text-black font-bold px-6 py-3 hover:bg-gray-200">
                                    Visit Collections
                                </button>

                            </div>
                            <div>
                                <img src={item.cover} alt={item.title} className="w-full h-auto object-contain" />

                            </div>
                        </div>

                    </div>
                ))}
            </Slider>

        </div>
    )


}