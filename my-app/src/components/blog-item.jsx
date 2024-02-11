import React from "react";
import '../styles/components/blog-item.css';

export const BlogItem = () => {
    return (
        <div className="blog-item">
        <a href="#" className="blog-item-post-name">UI Interactions of the week</a>
        <div className="blog-item-post-info">
          <div className="blog-item-post-date">12 Feb 2024</div>
          <div className="blog-item-line">|</div>
          <div className="blog-item-post-status">Express, Handlebars</div>
        </div>
        <div className="blog-item-post-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          beatae perspiciatis eligendi facilis quas? Odit molestias neque
          quam fuga molestiae? Laboriosam deleniti aliquam ab nam
          consectetur rem impedit sit obcaecati.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. A qui quam, culpa architecto
          voluptates odio facere harum mollitia! Consequuntur magni incidunt
          modi labore ratione placeat cum laborum eum dolorem quidem?
        </div>
      </div>
    )
}