import React from "react";
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import { ItemProfile } from "../components/item-profile.jsx";
import { RecentPosts } from "../components/recent-posts.jsx";
import { FeaturedWorks } from "../components/featured-works.jsx";

const Home = () => {
    return (
        <div>
            <Header/>
            <ItemProfile/>
            <RecentPosts/>
            <FeaturedWorks/>
            <Footer/>
        </div>
    )
}

export default Home;