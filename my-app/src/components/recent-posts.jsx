import React from "react";
import styled from "styled-components";


const RecentPostsStyled = styled.div`
.recent-posts {
  background: #1C1D20;
  max-height: 500px;
}

.recent-posts-upper-wrapper {
  padding-top: 15px;
  margin: auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
}

.recent-posts-upper-wrapper span.recent-posts-left-text {
  color: white;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px; /* 272.727% */
  text-decoration: none;
}

.recent-posts-upper-wrapper a.link-blog {
  text-decoration: none;
  color: #00a8cc;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
}

.recent-posts-rec-posts {
  margin: auto;
  max-width: 1200px;
  max-height: 350px;
  display: flex;
  justify-content: space-between;
}

.recent-posts-rec-posts h1 {
  padding: 15px 0 15px 0;
  color: white;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.recent-posts-post-info {
  color: grey;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.recent-posts-post-info span {
  padding-right: 5px;
}

.recent-posts-rec-posts p {
  padding: 15px 0 15px 0;
  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.recent-posts-post-one {
  max-width: 600px;
  margin: 30px;
  padding: 30px;
  background: #27282d;
  border: 2px #1C1D20;
  border-radius: 10px;
  transition: 0.6s;
} 

.recent-posts-post-one:hover {
  background-color: #303036;
}`

export const RecentPosts = () => {
    return(
      <RecentPostsStyled>
        <div className="recent-posts">
        <div className="recent-posts-upper-wrapper">
          <span className="recent-posts-left-text">Recent posts</span>
          <a href="/blog" className="link-blog">View all</a>
        </div>
        <div className="recent-posts-rec-posts">
          <div className="recent-posts-post-one">
            <h1>Making a web page with search engine</h1>
            <div className="recent-posts-post-info">
              <span>6 Feb 2024</span>
              <span>|</span>
              <span>Design, Frontend, Backend</span>
            </div>
            <p>
              In a personal project, I created a backend system for organizing and searching study notes by keywords. Using Node.js and Express.js, I developed a server architecture handling user authentication, data storage, and retrieval. This project honed my backend skills.
            </p>
          </div>
          <div className="recent-posts-post-one">
            <h1>Making a web page for my portfolio</h1>
            <div className="recent-posts-post-info">
              <span>1 Feb 2024</span>
              <span>|</span>
              <span>Design, Frontend</span>
            </div>
            <p>
              My web portfolio was crafted to showcase my projects and skills. I explored other portfolios for inspiration, then chose technologies: HTML, CSS, JavaScript, and Node.js. Crafting the site was engaging and allowed me to express my individuality.
            </p>
          </div>
        </div>
      </div>
      </RecentPostsStyled>
    )
}