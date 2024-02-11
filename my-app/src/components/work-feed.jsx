import React from "react";
import '../styles/components/work-feed.css';
import { WorkItem } from "./work-item";

export const WorkFeed = () => {
    return (
        <div className="work-feed-featured">
        <div className="work-feed-featured-wrapper">
          <a className="work-feed-left-text">Works</a>
        </div>
            <section className="work-feed-featured-section">
                <WorkItem/>
                <WorkItem/>
                <WorkItem/>
                <WorkItem/>
                <WorkItem/>
            </section>
        </div>
    )
}