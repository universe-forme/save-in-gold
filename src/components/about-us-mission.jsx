import React from "react";
import missionImg from "../assets/mission-img.jpg"

const  AboutUsMission = () => {
    return (
        <section className="bg-[#272727] py-20">
            <div className="container mx-auto px-6 blog-card-padding">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <img
                                src={missionImg}
                                alt="Gold coins and bars" className="w-full h-auto rounded-lg shadow-2xl"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 rounded-lg">
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-1/2 text-white">
                        <h2 className="text-4xl md:text-5xl font-cinzel font-normal mb-8 uppercase tracking-wider">
                            Our Mission
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8 font-montserrat font-normal">
                            At Save in Gold, our mission is to empower individuals and families to build a secure,
                            prosperous financial future through reliable gold investments. We believe gold is not just a
                            commodity but a timeless store of value that offers stability in a rapidly changing world.
                            Our
                            goal is to make gold investment accessible, transparent, and beneficial for everyone — from
                            first-time investors to seasoned professionals. We are committed to providing the highest
                            quality gold bars, backed by internationally recognized certifications and stored in secure,
                            state-of-the-art facilities. Through our user-friendly platform, we deliver a seamless
                            experience that simplifies buying, selling, and storing gold. Beyond our products, we value
                            customer support, education, and trust, ensuring every client receives the guidance and
                            resources needed to make informed investment decisions.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <p
                        className="text-[#DFB84A] text-xl font-cinzel tracking-widest uppercase border-b-2 border-[#DFB84A] inline-block pb-2">
                        We do it for you with love
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUsMission;