
const features = [
    {
        title: 'Real gold Transactions',
        description:
            'Trade real bars and coins, invest in gold. Our platform ensures that every transaction is backed by physical gold, providing you with a secure gold trading investment.',
    },
    {
        title: 'User-Friendly Interface',
        description:
            "Our intuitive interface makes gold trading market effortlessly. Whether you're a seasoned investor or new to gold trading, Save In Gold offers a user experience that's straightforward.",
    },
    {
        title: 'Dedicated Account Managers',
        description:
            'A dedicated account manager will be by your side 24/7, offering personalized support and expert guidance at every stage of your gold investment journey.',
    },
    {
        title: 'Flexible Trading Options',
        description:
            'Buy or sell gold in various quantities to suit your investment needs. Whether it’s for both small and large transactions, giving you the flexibility to trade.',
    },
];

export default function GoldBarFeature() {
    return (
        <section className="py-16 lg:py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 feature-padding font-montserrat">
                <div className="text-center mb-12">
                    <h2 className="text-[38] sm:text-4xl font-medium text-white mb-4">Save In Gold Feature</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#272727] rounded-xl p-6 text-center hover:border-[#DFB94A] border border-transparent transition-all duration-300 w-full md:max-w-[583px] md:mx-auto"
                        >
                            <h3 className="text-[#DFB84A] font-semibold text-lg mb-3">{feature.title}</h3>
                            <p className="text-white text-lg font-medium  leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
