import React from "react";
import '../styles/components/blog-item.css';

export const BlogItem = (props) => {
    return (
        <div className="blog-item">
        <a href="#" className="blog-item-post-name">{props.title}</a>
        <div className="blog-item-post-info">
          <div className="blog-item-post-date">12 Feb 2024</div>
          <div className="blog-item-line">|</div>
          <div className="blog-item-post-status">Express, Handlebars</div>
        </div>
        <div className="blog-item-post-text">
          {props.description}
        </div>
      </div>
    )
}