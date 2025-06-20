import goldbarImage from "../assets/goldbar-img.jpg";
import appleSvg from "../assets/apple.svg";
import googlePlaySvg from "../assets/google-play.svg";

const GoldAppSection = () => {
    return (
            <section className="py-16 lg:py-20 bg-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 font-montserrat save-in-gold-padding">
                    <div className="text-center mb-12">
                        <h2 className="text-[38px] sm:text-4xl font-medium text-white mb-4">
                            Save in Gold App
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <p className="text-[#DFB94A] text-lg font-normal tracking-wide uppercase">
                                    Get Best Gold Trade Application
                                </p>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#DFB94A] leading-tight">
                                    Your Trusted Platform for Real Gold Trading
                                </h2>
                            </div>

                            <p className="text-white text-lg font-medium leading-relaxed">
                                Discover a new era of secure and convenient gold trading with
                                Save in Gold. Our platform is designed for individuals who want
                                to buy and sell real gold online without the complexities and
                                risks associated with Forex trading. With Save in Gold, you can
                                invest in physical gold with confidence, knowing that your
                                assets are backed by tangible value.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex items-center justify-center bg-[#17181C] hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-gray-600">
                                    <img src={appleSvg} alt="Apple App Store" className="w-7 h-7 mr-3" />
                                    <div className="text-left">
                                        <div className="text-xs">Download now</div>
                                        <div className="text-sm font-semibold">App Store</div>
                                    </div>
                                </button>
                                <button className="flex items-center justify-center bg-[#17181C] hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-gray-600">
                                    <img src={googlePlaySvg} alt="Google Play Store" className="w-7 h-7 mr-3" />
                                    <div className="text-left">
                                        <div className="text-xs">Download now</div>
                                        <div className="text-sm font-semibold">Play Store</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] mt-10 lg:mt-0">
                            <div className="absolute
                                        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 /* Centering for all screens */
                                        w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[520px] lg:h-[520px]
                                        bg-[#dfb94a] rounded-full z-0 flex justify-center items-center">
                                <img
                                    src={goldbarImage}
                                    alt="Gold Bar App Preview"
                                    className="relative z-10 w-44 h-auto sm:w-60 md:w-80 lg:w-[420px] rotate-[10deg] drop-shadow-2xl"
                                />
                            </div>
                            {/*<img src={"mobileAppIMg"} className="w-full h-full object-contain" alt={mobileAppIMg} />*/}
                        </div>
                    </div>
                </div>
            </section>

    );
};

export default GoldAppSection;
