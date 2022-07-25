import React from "react";
import { CgFileDocument } from 'react-icons/cg'
import { aboutCardData } from "./data/cardData";
import { socialData } from "../../../data/socialIconData";
import './style.css'

const About = () => {
    return (
        <section className="content-section about-section" id={"about"} >
            <div className="about-background" />
            <div className='about-social-medias'>
                {
                    socialData.map((item, index) => {
                        return (
                            <div className="social-icon" key={index}>
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
                    <div className="about-users">
                        <h1 className='about-users-count'>
                            99<font>+</font>
                        </h1>
                        <p className='about-users-text content-title'>
                            Clientes
                            e representantes
                            pelo Brasil.
                        </p>
                    </div>
                    <div>
                    </div>
                    <div className="about-content-main">
                        <h1 className='content-title'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec magna id ex mollis mollis.
                        </h1>
                        <div className="cards-space">
                            {
                                aboutCardData.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={item.rec ? 'card recomended inactive' : 'card inactive'}>
                                            <div className='card-content'>
                                                {item.icon}
                                                <h1 className="card-text">{item.text}</h1>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default About;