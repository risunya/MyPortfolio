import React from "react";
import '../styles/components/work-item.css';

export const WorkItem = (props) => {
    return (
        <div className="work-one">
              <img src="../assets/Rectangle_30.jpg" className="work-image"/>
              <section className="work-info">
                <a className="work-heading">{props.title}</a>
                <div className="work-properties">
                  <div className="work-date">2024</div>
                  <div className="work-spec">Dashboard</div>
                </div>
                <div className="work-lorem">{props.description}</div>
            </section>
          </div>
    )
}