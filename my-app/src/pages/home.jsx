import React from "react";
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import {Profile} from '../components/profile.jsx';
import Recent from "../components/recent.jsx";
import Featured from "../components/featured.jsx";

const Home = () => {
    return (
        <div>
            <Header/>
            <Profile/>
            <Recent/>
            <Featured/>
            <Footer/>
         </div>
    )
}

export default Home;