import { Coins, Smartphone, UserCog, LineChart } from 'lucide-react';

const features = [
    {
        icon: <Coins className="text-black w-5 h-5" />,
        title: 'Real gold Transactions',
        description:
            'Trade real bars and coins, invest in gold. Our platform ensures that every transaction is backed by physical gold, providing you with a secure gold trading investment.',
    },
    {
        icon: <Smartphone className="text-black w-5 h-5" />,
        title: 'User-Friendly Interface',
        description:
            "Our intuitive interface makes gold trading market effortlessly. Whether you're a seasoned investor or new to gold trading, Save In Gold offers a user experience that's straightforward.",
    },
    {
        icon: <UserCog className="text-black w-5 h-5" />,
        title: 'Dedicated Account Managers',
        description:
            'A dedicated account manager will be by your side 24/7, offering personalized support and expert guidance at every stage of your gold investment journey.',
    },
    {
        icon: <LineChart className="text-black w-5 h-5" />,
        title: 'Flexible Trading Options',
        description:
            'Buy or sell gold in various quantities to suit your investment needs. Whether it’s for both small and large transactions, giving you the flexibility to trade.',
    },
];

export default function GoldBarFeature() {
    return (
        <section className="py-16 lg:py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Save In Gold Feature</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#272727] rounded-xl p-6 text-center hover:border-[#DFB94A] border border-transparent transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#DFB94A] rounded-full flex items-center justify-center mx-auto mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
