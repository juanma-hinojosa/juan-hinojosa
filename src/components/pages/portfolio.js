/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import Project from "./portfolio-project";
import {useTranslation} from "react-i18next";
import "../../style/work.css";

import AOS from 'aos';
import "aos/dist/aos.css";

export default function() {
    useEffect(() => {
        AOS.init({ 
            duration: 1500, 
            once: true,
        });
    }, []);
    const [t, i18n] = useTranslation("global");
    return(
        <div className="work" id="work">
            <div className="left-work">
                <div className="left-content" data-aos="fade-right">
                    <div className="title-work">
                        <h1>{t("portfolio.title-work")}</h1>
                    </div> 
                    <div className="subtitle-work">
                        <p>{t("portfolio.subtitle-work")}</p>
                    </div>
                    <a href="#">{t("portfolio.link-work")}</a>
                </div>
            </div> 
            <div className="right-work">
                <Project 
                    titulo="Codepen"
                    job="UX-UI"
                    imagen="1"
                    urlGit="https://github.com/juanma-hinojosa/clone-code-pen"
                    url="https://juanma-hinojosa.github.io/clone-code-pen/"
                    
                />
                <Project 
                    titulo="Disney Plus"
                    job="Login Front-End"
                    imagen="2"
                    urlGit="https://juanma-hinojosa.github.io/clone-disneyplus/"
                    url="https://github.com/juanma-hinojosa/clone-disneyplus"
                />
                <Project 
                    titulo="Facebook"
                    job="UX-UI"
                    imagen="9"
                    urlGit="https://juanma-hinojosa.github.io/taekwando/"
                    url="https://github.com/juanma-hinojosa/taekwando"
                />
                <Project 
                    titulo="Netflix"
                    job="UX-UI"
                    imagen="4"
                    urlGit="https://github.com/juanma-hinojosa/clone-netflix"
                    url="https://juanma-hinojosa.github.io/clone-netflix/"
                />
                <Project 
                    titulo="Instagram"
                    job="UX-UI"
                    imagen="5"
                    urlGit="https://github.com/juanma-hinojosa/clone-login-instagram"
                    url="https://juanma-hinojosa.github.io/clone-login-instagram/"
                />
                <Project 
                    titulo="Spotify"
                    job="UX-UI"
                    imagen="6"
                    url="https://juanma-hinojosa.github.io/spotify-utn/"
                    urlGit="https://github.com/juanma-hinojosa/spotify-utn"
                />
            </div>
        </div>
    )
}

