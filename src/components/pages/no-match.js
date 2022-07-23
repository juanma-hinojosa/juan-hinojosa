import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from 'aos';
import "aos/dist/aos.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    useEffect(() => {
        AOS.init({ 
            duration: 1500, 
            once: true,
        });
    }, []);

    return(
        <div className="no-match-wrapper">
            <div className="no-match-content" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                <h2 className="title-nomatch">Error page not found!!</h2>
                <h3>:(</h3>
                <div className="link-home-content">
                    <Link to="/" className="link-home">
                        <i class="fas fa-arrow-left"></i>
                        Return to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}