import React from "react";
function Card(props){

    
    const starImage = props.is_favorited ?`../images/card-images/star active.svg`  : `../images/card-images/star default.png`;
return (    

    <div className= "card-wrapper">
    <div className="card-top">
    <img className="card-company-image" src={`${props.image}`} alt="company-img"/>
        
        <div className="card-top-line">
        <p className="card-company-name">{props.name}</p>
        <img className="card-star-default" src={starImage} alt="company-img"/>
        </div>
        <p className="card-company-created-or-archived"> { props.is_archived ? "Archived"  : props.created_at ? `Created on ${props.created_at}` : " "}</p>
    </div>

    <div className="card-text">{props.description}</div>

    <hr className="card-breakline"/>

    <div className="card-bottom">
        
        <img className="card-bottom-campaign-image" src="../images/card-images/icon-conversations-small.png" alt="compaign-img"/>
        <p className="card-bottom-campaign-text card-bottom-text">{props.campaigns_count} Campaigns</p>
        <img className="card-bottom-leads-image" src="../images/card-images/icon-leads-small.png" alt="leads-img"/>
        <p className="card-bottom-leads-text card-bottom-text">{props.leads_count} Leads</p>
        
    </div>
    </div>

)
}
export default Card;