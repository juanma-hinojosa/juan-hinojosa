/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import BgAbout from "../../img/bg-about.jpeg"; 
import "../../style/about.css"

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="left-about">
                    <div class="left-content" data-aos="fade-right">
                        <div className="title-about">
                            <h1>ABOUT ME</h1>
                        </div>
                        <div className="subtitle-about">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iusto ex ad explicabo quos labore aperiam, dignissimos omnis excepturi deserunt. Officiis eligendi iure laudantium quaerat libero suscipit amet soluta accusantium?</p>
                            
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore quasi saepe ducimus maiores facilis doloremque ad, unde quam, sint delectus quibusdam porro atque voluptates?</p>
                        </div>
                        <a href="#">SEE OUR WORKS</a>
                    </div>
                    </div>
                <div className="right-about" >
                    <img src ={BgAbout} />
                </div>
            </div>
        )
    }
}

export default About;