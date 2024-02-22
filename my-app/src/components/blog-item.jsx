import React from "react";
import styled from "styled-components";

const BlogItemStyled = styled.div`
.blog-item {
  margin: 0 auto;;
  margin-top: 100px;
  max-width: 1000px;
}

.blog-item-post-name {
  text-decoration: none;
  color: white;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.blog-item-post-info {
  display: flex;
  padding: 10px;
}

.blog-item-line {
  margin: 0px 15px 0px 15px;
}

.blog-item-post-date,
.blog-item-line {
  color: grey;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.blog-item-post-status {
  color: grey;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.blog-item-post-text {
  color: white;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}`

export const BlogItem = (props) => {
    return (
      <BlogItemStyled>
        <div className="blog-item">
        <a href="/" className="blog-item-post-name">{props.title}</a>
        <div className="blog-item-post-info">
          <div className="blog-item-post-date">12 Feb 2024</div>
          <div className="blog-item-line">|</div>
          <div className="blog-item-post-status">Express, Handlebars</div>
        </div>
        <div className="blog-item-post-text">
          {props.description}
        </div>
      </div>
      </BlogItemStyled>
    )
}