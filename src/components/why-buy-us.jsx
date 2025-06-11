import { ShieldCheck, BadgeCheck, Layers3, DollarSign } from "lucide-react";
import abcImage from "../assets/abc.png";

const WhyBuyUs = () => {
    return (
            <section className="py-16 lg:py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <p className="text-[#DFB94A] text-sm font-medium tracking-wide uppercase">Save In Gold</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-cinzel">
                                    WHY BUY GOLD BARS FROM SAVE IN GOLD COMPANY?
                                </h2>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-[#DFB94A]">
                                        <ShieldCheck size={20} />
                                        <h3 className="font-semibold text-lg">Highest Purity</h3>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Our 24k gold bars are 99.99% pure, providing you with the highest quality gold available in the market.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-[#DFB94A]">
                                        <BadgeCheck size={20} />
                                        <h3 className="font-semibold text-lg">Certified and Hallmarked</h3>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Each gold bar comes with an assay certificate and is stamped with our authenticity.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-[#DFB94A]">
                                        <Layers3 size={20} />
                                        <h3 className="font-semibold text-lg">Variety of Sizes</h3>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Whether you are looking to make a small investment or purchase larger quantities, we offer gold bars in various sizes starting from 1 gram.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-[#DFB94A]">
                                        <DollarSign size={20} />
                                        <h3 className="font-semibold text-lg">Competitive Pricing</h3>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Our prices are based on the current market rates, ensuring that you receive the most competitive pricing for your gold bars.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-2 gap-4 h-[70vh] max-h-[800px]">
                                <div className="col-span-2 bg-[#272727] rounded-3xl overflow-hidden">
                                    <img src={abcImage} alt="Gold Bars" className="w-full h-[300px] object-cover rounded-3xl" />
                                </div>
                                <div className="bg-[#272727] rounded-3xl overflow-hidden">
                                    <img src={abcImage} alt="Gold Detail 1" className="w-full h-[300px] object-cover rounded-3xl" />
                                </div>
                                <div className="bg-[#272727] rounded-3xl overflow-hidden">
                                    <img src={abcImage} alt="Gold Detail 2" className="w-full h-[300px] object-cover rounded-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    );
};

export default WhyBuyUs;
