import Navbar from "../components/navbar.jsx";
import GoldbarCollectionHero from "../components/goldbar-collection-hero.jsx";
import WhyInvestInGoldBars from "../components/why-invest-in-goldbar.jsx";
import FooterSection from "../components/footer-section.jsx";

export const GoldBarCollection = () => {
    return (
        <div>
            <Navbar />
            <GoldbarCollectionHero />
            <WhyInvestInGoldBars />
            <FooterSection />
        </div>
    );
};