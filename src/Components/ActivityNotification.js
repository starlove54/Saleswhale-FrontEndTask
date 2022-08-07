import React from "react";




function ActivityNotification(props)
{


return(
  <div>
  <img className="activity-images" src={props.image} alt="Julie"/>
      <p className = "activity-firsttext activity-text-placement activity-notifications"><span className="activity-bold">{props.name}</span> increased <span className="activity-bold">{props.target}</span>'s quota.</p>
      <p className ="activity-text-placement activity-time">{props.created_at}</p>
   </div>
  )
}


export default ActivityNotification;