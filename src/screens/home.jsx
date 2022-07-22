import React from "react";
import About from "../components/home/about/about";
import HomeIntegrate from "../components/home/homeIntegrate/homeIntegrate";
import Intro from "../components/home/intro/intro";
import SystemImages from "../components/home/systemImages/systemImages";
import SystemReports from "../components/home/systemReports/systemReports";

const Home = () => {
    return (
        <main>
            <Intro />
            <About />
            <SystemImages />
            <SystemReports />
            <HomeIntegrate />
        </main>
    );
}

export default Home;
