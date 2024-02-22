import React from "react";
import { WorkItem } from "./work-item";
import {creations} from '../data/work-data.js';
import styled from "styled-components";

const FeaturedWorksStyled = styled.div`
.featured-works-wrapper {
    margin: auto;
    margin-top: 100px;
    max-width: 1200px;
  }


  .featured-works-left-text {
    padding-bottom: 15px;
    color: white;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px; /* 272.727% */
  }
  
    .featured-works-section {
    margin: auto;
    max-width: 1200px;
    display: block;
  }`

export const FeaturedWorks = () => {
    return(
        <FeaturedWorksStyled>
        <div className="featured-works">
            <div className="featured-works-wrapper">
                <span className="featured-works-left-text">Featured Works</span>
            </div>

            <section className="featured-works-section">
                <WorkItem {...creations[0]}/>
                <WorkItem {...creations[1]}/>
                <WorkItem {...creations[2]}/>
            </section>
        </div>
        </FeaturedWorksStyled>
    )
}