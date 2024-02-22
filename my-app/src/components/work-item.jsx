import React from "react";
import styled from "styled-components";

const WorkItemStyled = styled.div`
.work-one {
  display: flex;
  padding: 15px;
  border-top: 1px solid #1C1D20;
  border-bottom: 1px solid #1C1D20;
  transition: 0.5s;
}

.work-one:hover {
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
}

.work-image {
  border-radius: 15px;
  width: 246px;
  height: 180px;
  flex-shrink: 0;
}

.work-info {
  padding: 15px;
}

.work-heading {
  text-decoration: 0;
  color:white;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0;
}

.work-properties {
  display: flex;
}

.work-date {
  color: grey;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  padding: 15px 15px 15px 0px;
}

.work-spec {
  color: grey;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  padding: 15px 15px 15px 0px;
}

.work-lorem {
  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 700px;
}`

export const WorkItem = (props) => {
    return (
      <WorkItemStyled>
        <div className="work-one">
              <img src="../assets/Rectangle_30.jpg" className="work-image" alt="work"/>
              <section className="work-info">
                <a href="/" className="work-heading">{props.title}</a>
                <div className="work-properties">
                  <div className="work-date">2024</div>
                  <div className="work-spec">Dashboard</div>
                </div>
                <div className="work-lorem">{props.description}</div>
            </section>
          </div>
        </WorkItemStyled>
    )
}