import React from "react";

function Project(props) {
    return(
        // <div className="right-work">
                <div className="work">
                    <img src={require(`../../img/jobs/job-${props.imagen}.jpg`)} alt="" />
                    <div className="capa">
                        <h3>{props.titulo}</h3>
                        <h4>{props.job}</h4>
                        <div>
                            <a href={props.url} target="_blank" rel="noreferrer">SEE SITE</a>
                            <a href={props.urlGit} target="_blank" rel="noreferrer">SEE CODE</a>
                        </div>
                    </div>
                </div>
    )
}

export default Project;