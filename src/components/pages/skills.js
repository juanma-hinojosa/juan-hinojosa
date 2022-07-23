/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import "../../style/services.css"
import Skill from "./skill";
import {useTranslation} from "react-i18next";
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

    return (
        <div className="services">
             <div className="left-services" data-aos="fade-right">
                
                <div className="title-services">
                    <h1>{t("skills.title-services")}</h1>
                </div>
                <div className="subtitle-services">
                    <p>{t("skills.subtitle-services")}</p>
                </div>
            
            </div>
            <div className="right-services" data-aos="fade-up">
                <Skill 
                    imagen="1"
                    language="HTML"
                />
                <Skill 
                    imagen="2"
                    language="CSS"
                />
                <Skill 
                    imagen="3"
                    language="SASS"
                />
                <Skill 
                    imagen="4"
                    language="JavaScript"
                />
                <Skill 
                    imagen="5"
                    language="BOOTSTRAP"
                />
                <Skill 
                    imagen="6"
                    language="MySQL"
                />
                <Skill 
                    imagen="7"
                    language="Postgres SQL"
                />
                <Skill 
                    imagen="8"
                    language="Node JS"
                />
                <Skill 
                    imagen="13"
                    language="Mongo DB"
                />
                <Skill 
                    imagen="10"
                    language="PYTHON"
                />
                <Skill 
                    imagen="11"
                    language="React"
                />
                <Skill 
                    imagen="12"
                    language="Angular"
                />
            </div>
        </div>
    ); 
}