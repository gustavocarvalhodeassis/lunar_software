import React from "react";
import {socialData} from "./data/socialIconData";
import './style.css'

const About = () => {
    return (
        <section className="content-section">
            <div className='about-social-medias'>
                {
                    socialData.map((item, index) => {
                        return (
                            <div key={index}>
                                {
                                    item.icon
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className="container">
                <div className='about-content'>

                </div>
            </div>
        </section>
    );
}

export default About;