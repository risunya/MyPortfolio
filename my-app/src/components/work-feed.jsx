import React from "react";
import { WorkItem } from "./work-item";
import {creations} from '../data/work-data.js';
import styled from "styled-components";

const WorkFeedStyled = styled.div`
.work-feed-featured-wrapper {
    margin: auto;
    margin-top: 120px;
    max-width: 1200px;
  }
  
  .work-feed-featured-wrapper span.work-feed-left-text {
    color: white;
    font-size: 44px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px; /* 136.364% */
  }

  .work-feed-featured-section {
    margin: auto;
    margin-top: 50px;
    max-width: 1100px;
    display: block;
  }`

export const WorkFeed = () => {
    return (
        <WorkFeedStyled>
            <div className="work-feed-featured">
            <div className="work-feed-featured-wrapper">
            <span className="work-feed-left-text">Works</span>
            </div>
                <section className="work-feed-featured-section">
                {creations.map((creation) => <WorkItem {...creation}/>)}
                </section>
            </div>
        </WorkFeedStyled>
    )
}