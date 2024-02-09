import React from 'react';

const Recent = () => {
    return (
<div class="posts">
        <div class="upper-wrapper">
          <a class="left-text">Recent posts</a>
          <a href="blog.html" class="link-blog">View all</a>
        </div>
        <div class="rec-posts">
          <div class="post-one">
            <h1>Making a web page with search engine</h1>
            <div class="post-info">
              <a>6 Feb 2024</a>
              <a>|</a>
              <a>Design, Frontend, Backend</a>
            </div>
            <p>
              In a personal project, I created a backend system for organizing and searching study notes by keywords. Using Node.js and Express.js, I developed a server architecture handling user authentication, data storage, and retrieval. This project honed my backend skills.
            </p>
          </div>
          <div class="post-two">
            <h1>Making a web page for my portfolio</h1>
            <div class="post-info">
              <a>1 Feb 2024</a>
              <a>|</a>
              <a>Design, Frontend</a>
            </div>
            <p>
              My web portfolio was crafted to showcase my projects and skills. I explored other portfolios for inspiration, then chose technologies: HTML, CSS, JavaScript, and Node.js. Crafting the site was engaging and allowed me to express my individuality.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Recent;