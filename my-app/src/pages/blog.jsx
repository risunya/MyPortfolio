import React from "react";
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import { BlogFeed } from "../components/blog-feed.jsx";

const Blog = () => {
    return (
        <div>
            <Header/>
            <BlogFeed/>
            <Footer/>
        </div>
    )
}

export default Blog;