/* eslint-disable no-unused-vars */
import React from "react";
import {useTranslation} from "react-i18next";


export default function ButtonsL() {
    const [t, i18n] = useTranslation("global");

    return (
            <div>
                <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                <button onClick={() => i18n.changeLanguage("pt")}>PT</button>
            </div>                              
    );
}