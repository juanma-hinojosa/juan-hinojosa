/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BgAbout from "../../img/bg-about.jpeg"; 
import "../../style/about.css"

import AOS from 'aos';
import "aos/dist/aos.css";
import {useTranslation} from "react-i18next";

export default function() {
        useEffect(() => {
            AOS.init({ 
                duration: 1500, 
                once: true,
            });
        }, []);

        const [t, i18n] = useTranslation("global");


        return (
            <div className="about">
                <div className="left-about">
                    <div class="left-content" data-aos="fade-right">
                        <div className="title-about">
                            <h1>{t("about.title-about")}</h1>
                        </div>
                        <div className="subtitle-about">
                            <p>{t("about.subtitle-about-1")}</p>
                            
                            <p>{t("about.subtitle-about-2")}</p>
                        </div>
                        <Link to="/portfolio">
                            {t("about.link-1")}
                        </Link>
                        
                        {/* <a href="#">{t("link-1")}</a> */}
                    </div>
                    </div>
                <div className="right-about" >
                    <img src ={BgAbout} />
                </div>
            </div>
        )
    
}
