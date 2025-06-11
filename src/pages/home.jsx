import Navbar from "../components/navbar.jsx";
import IndexHeroSection from "../components/index-hero-section.jsx";
import TrustSection from "../components/trust-section.jsx";
import QualityAndValue from "../components/quality.jsx";
import WhyBuyUs from "../components/why-buy-us.jsx";
import GoldAppSection from "../components/gold-app.jsx";
import GoldBarFeature from '../components/goldbar-feature.jsx';
import GoldbarFaqs from '../components/goldbar-faqs.jsx';
import Blogsection from "../components/blog-section.jsx";
import FooterSection from "../components/footer-section.jsx";
import HR from "../components/hr.jsx";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <IndexHeroSection />
            <TrustSection />
            <QualityAndValue />
            <WhyBuyUs />
            <HR />
            <GoldAppSection />
            <HR />
            <GoldBarFeature />
            <GoldbarFaqs />
            <Blogsection />
            <FooterSection />
        </div>
    );
};