import Navbar from "../components/navbar.jsx";
import BlogHero from "@/components/blog-hero.jsx";
import BlogLatestUpdate from "@/components/blog-latest-update.jsx";
import RecentUpdates from "@/components/blog-recent-updates.jsx";
import FooterSection from "../components/footer-section.jsx";

export const Blog = () => {
    return (
        <div>
            <Navbar />
            <BlogHero />
            <BlogLatestUpdate />
            <RecentUpdates />
            <FooterSection />
        </div>
    );
};