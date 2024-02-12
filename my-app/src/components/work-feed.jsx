import React from "react";
import '../styles/components/work-feed.css';
import { WorkItem } from "./work-item";
import {creations} from '../data/work-data.js';

export const WorkFeed = () => {
    return (
        <div className="work-feed-featured">
        <div className="work-feed-featured-wrapper">
          <a className="work-feed-left-text">Works</a>
        </div>
            <section className="work-feed-featured-section">
               {creations.map((creation) => <WorkItem {...creation}/>)}
            </section>
        </div>
    )
}