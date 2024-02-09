import React from 'react';

const Featured = () => {
    return (
        
      <div className="featured">
      <div className="featured-wrapper">
        <a className="left-text">Featured Works</a>
      </div>

      <section className="featured-section">
        <div className="work-one">
        <img
            src="/assets/Rectangle_30.jpg" 
            alt="альтернативный текст"
            className="work-image"
          />
          <section className="work-info">
            <a className="work-heading">Designing Dashboards</a>
            <div className="work-properties">
              <div className="work-date">2024</div>
              <div className="work-spec">Design</div>
            </div>
            <div className="work-lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam vel recusandae omnis qui? Quaerat ratione nulla ipsum
              ex. Recusandae saepe minus quas distinctio doloribus cupiditate
              dolor pariatur deleniti provident dolores.
            </div>
          </section>
        </div>

        <div className="work-two">
        <img
            src="/assets/Rectangle_31.jpg" 
            alt="альтернативный текст"
            className="work-image"
          />
          <section className="work-info">
            <a className="work-heading">Making a web page with search engine</a>
            <div className="work-properties">
              <div className="work-date">2024</div>
              <div className="work-spec">Frontend | Backend </div>
            </div>
            <div className="work-lorem">
              In a personal project, I created a backend system for organizing and searching study notes by keywords. Using Node.js and Express.js, I developed a server architecture handling user authentication, data storage, and retrieval. This project honed my backend skills.
            </div>
          </section>
        </div>

        <div className="work-three">
        <img
            src="/assets/Rectangle_32.jpg" 
            alt="альтернативный текст"
            className="work-image"
          />
          <section className="work-info">
            <a className="work-heading">Personal website</a>
            <div className="work-properties">
              <div className="work-date">2024</div>
              <div className="work-spec">Frontend</div>
            </div>
            <div className="work-lorem">
              My web portfolio was crafted to showcase my projects and skills. I explored other portfolios for inspiration, then chose technologies: HTML, CSS, JavaScript, and Node.js. Crafting the site was engaging and allowed me to express my individuality.
            </div>
          </section>
        </div>
      </section>
    </div>
    );
};

export default Featured;