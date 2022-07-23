import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import "../../style/hero.css";
import AOS from 'aos';
import "aos/dist/aos.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    // eslint-disable-next-line no-unused-vars
    const [t, i18n] = useTranslation("global");
    useEffect(() => {
        AOS.init({ 
            duration: 1500, 
            once: true,
        });
    }, []);
    return(
        <div class="hero-section">
          <div className="hero-wrapper" data-aos="fade-zoom-in">
                <div class="title-hero">
                    <h3>Full Stack Developer</h3>
                    <h2>DEVELOPER</h2>
                </div>
                <div className="subtitle-hero">
                    <p>{t("home.subtitle-hero-1")}</p>
                    <p>{t("home.subtitle-hero-2")}</p>
                </div>
                <div className="links">
                    <a href="https://www.facebook.com/juan.hinojosa.359/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/juanma.hinojosa/?hl=es" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/juan-hinojosa-b07b05209/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/juanma-hinojosa" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    ); 
}
