import React from "react";
import '../styles/components/blog-feed.css';
import { BlogItem } from "./blog-item";

export const BlogFeed = () => {
    return (
        <div className="blog-feed-main-wrapper">
        <div className="blog-feed-header">Blog</div>

        <section className="blog-feed-table">
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
        </section>
        </div>

    )
}