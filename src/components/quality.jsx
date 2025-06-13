import qaulitySectionImg from "../assets/quality-section-img.jpg";

const QualityAndValue = () => {
    return (
            <section className="py-20 bg-[#272727]">
                <div className="max-w-full mx-0 px-0">
                    <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                        <div className="w-full h-full">
                            <img
                                src={qaulitySectionImg}
                                alt="Gold Bars"
                                className="w-full h-full object-cover rounded-none"
                                style={{ minHeight: "340px", maxHeight: "500px" }}
                            />
                        </div>
                        <div className="flex flex-col justify-center px-8 py-12 space-y-8 h-full min-h-[340px] max-h-[500px] quality-value-padding">
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-cinzel">
                                    Trusted Source For Premium Gold Bars Offering Quality & Value
                                </h2>
                                <p className="text-lg text-gray-300 leading-loose">
                                    Explore a curated selection of certified gold bars, where unmatched purity meets exceptional value — trusted by investors and collectors across the UAE and beyond.
                                </p>
                            </div>
                            <div>
                                <button className="bg-[#DFB94A] text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default QualityAndValue;
