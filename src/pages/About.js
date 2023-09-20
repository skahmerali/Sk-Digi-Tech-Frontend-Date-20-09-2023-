import React from 'react'
import './about.css'
import aboutBanner from '../assets/Website Creator.gif'

const About = () => {
    return (
        <>

            <section className="about" id="about">

                <h1 class="heading1">

                    <span>A</span>
                    <span>b</span>
                    <span>o</span>
                    <span>u</span>
                    <span>t</span>
                    <span class="space"></span>
                    <span>u</span>
                    <span>s</span>

                </h1>

                    <div className="grid">

                            <div className="image">

                                        <img src={aboutBanner} alt="" />

                            </div>
                            <div className="content">

                                        <h1>We Provide the <br /> <span className="highlight"> Best Online </span> Courses</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus, tempore qui ipsam corporis libero rerum iure porro harum commodi voluptatibus nulla doloremque explicabo! Quidem veniam provident error distinctio at?</p>
                                        <button className="btn">Read More</button>

                            </div>

                    </div>

            </section>

        </>
    )
}

export default About