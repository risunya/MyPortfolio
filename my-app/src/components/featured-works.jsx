import React from "react";
import '../styles/components/featured-works.css';
import { WorkItem } from "./work-item";

export const FeaturedWorks = () => {
    return(
        <div className="featured-works">
            <div className="featured-works-wrapper">
                <a className="featured-works-left-text">Featured Works</a>
            </div>

            <section className="featured-works-section">
                <WorkItem/>
                <WorkItem/>
                <WorkItem/>
            </section>
        </div>
    )
}