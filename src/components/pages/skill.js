import React from "react";

function Skill(props) {
    return(
        <div className="services-card">
            <div>
              <img src={require(`../../img/skills/skill-${props.imagen}.png`)} alt="" />
            </div>
            <h2>{props.language}</h2>
        </div>
    )
}

export default Skill;