import React from "react";
import Card from "./Card"; 
import teamsmockdata from "../teamsmockdata";

function Teams() {
     


    const card = teamsmockdata.map( item => (
        <Card
          key = {item.id}
          name = {item.name}
          image = {item.image}
          description = {item.description}
          campaigns_count = {item.campaigns_count}
          leads_count = {item.leads_count}
          is_favorited = {item.is_favorited}
          is_archived = {item.is_archived}
          created_at= {item.created_at}
        />
  ))

    return(
        <div className="teams-wrapper">
          <div className="teams-uppertext">
            <p className="teams-uppertext-titletext">All Teams</p>
            <p className="teams-uppertext-infotext">Showing 65 out of 65 teams</p>
          </div>
          <hr className="teams-breakline"/>
          <div className="teams-cardwrapper">{card}</div>
        </div>
    )

}


export default Teams;