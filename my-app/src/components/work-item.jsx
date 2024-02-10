import React from "react";
import '../styles/components/work-item.css';

export const WorkItem = () => {
    return (
        <div className="work-one">
              <img src="../../public/assets/Rectangle_30.jpg" className="work-image"/>
              <section className="work-info">
                <a className="work-heading">Designing Dashboards</a>
                <div className="work-properties">
                  <div className="work-date">2024</div>
                  <div className="work-spec">Dashboard</div>
                </div>
                <div className="work-lorem">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam vel recusandae omnis qui? Quaerat ratione nulla ipsum
                  ex. Recusandae saepe minus quas distinctio doloribus cupiditate
                  dolor pariatur deleniti provident dolores.
                </div>
            </section>
          </div>
    )
}