import React from "react";
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import { WorkFeed } from "../components/work-feed.jsx";

const Work = () => {
    return (
        <div>
            <Header/>
            <WorkFeed/>
            <Footer/>
        </div>
    )
}

export default Work;