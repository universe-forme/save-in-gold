import Navbar from "@/components/navbar.jsx";
import FooterSection from "@/components/footer-section.jsx";
import AboutUsHero from "@/components/about-us-hero.jsx";
import SaveInGoldFeature from "@/components/save-in-gold-feature.jsx";
import AboutUsMission from "@/components/about-us-mission.jsx";
import AboutUsWhyUs from "@/components/about-us-why-us.jsx";

export const  AboutUs = () => {
    return (
        <div>
            <Navbar />
            <AboutUsHero />
            <SaveInGoldFeature />
            <AboutUsMission />
            <AboutUsWhyUs />
            <FooterSection />
        </div>
    )
}