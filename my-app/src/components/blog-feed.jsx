import React from "react";
import { BlogItem } from "./blog-item";
import {quarters} from '../data/blog-data.js';
import styled from "styled-components";

const BlogFeedStyled = styled.div`
.blog-feed-main-wrapper {
    max-width: 1200px;
    margin: auto;
    margin-top: 120px;
  }
  
  .blog-feed-header {
    color: white;
    font-size: 44px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px; /* 136.364% */
  }
  
  .blog-feed-table {
    display: block;
    margin-bottom: 150px;
  }
  
  .blog-feed-table p {
    max-width: 1200px;
  }`
export const BlogFeed = () => {
    return (
        <BlogFeedStyled>
            <div className="blog-feed-main-wrapper">
            <div className="blog-feed-header">Blog</div>

            <section className="blog-feed-table">
            {quarters.map((quarter) => <BlogItem {...quarter}/>)}
            </section>
            </div>
        </BlogFeedStyled>

    )
}