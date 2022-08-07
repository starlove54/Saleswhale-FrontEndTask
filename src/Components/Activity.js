import React from "react";
import activitiesmockdata from "../activitiesmockdata";
import ActivityNotification from "./ActivityNotification";


const activityNotification = activitiesmockdata.map( item => (
   <ActivityNotification
     key = {item.id}
     name = {item.person.name}
     image = {item.person.avatar}
     target = {item.target}
     action = {item.action}
     created_at= {item.created_at}
   />
))

function Activity(){

    return(
        <div className ="activity-wrapper">
             <p className="activity-title">Activity</p>
             <hr className ="activity-breakline"/>
             <div>{activityNotification}</div>

{/* 
            <div>
            <img className="activity-images" src="../images/activity-images/julie.png" alt="Julie"/>
                <p className = "activity-firsttext activity-text-placement activity-notifications"><span className="activity-bold">Julie</span> increased <span className="activity-bold">Indeed - US</span>'s quota.</p>
                <p className ="activity-text-placement activity-time">2 hours ago</p>
             </div>
             <div>
             <img className="activity-images" src="../images/activity-images/emily.png" alt="Julie"/>
                <p className = "activity-alltext-exceptfirst  activity-text-placement activity-notifications"><span className="activity-bold">Emily</span> added new leads to <span className="activity-bold">LinkedIn.</span></p>
                <p className ="activity-text-placement activity-time">4 hours ago</p>
             </div>
             <div>
             <img className="activity-images" src="../images/activity-images/anthony.png" alt="Julie"/>
                <p className = "activity-alltext-exceptfirst  activity-text-placement activity-notifications"><span className="activity-bold">Anthony</span> archived the team <span className="activity-bold">Uber</span>.</p>
                <p className ="activity-text-placement activity-time">6 hours ago</p>
             </div>
             <div>
             <img className="activity-images" src="../images/activity-images/julie.png" alt="Julie"/>
                <p className = "activity-alltext-exceptfirst  activity-text-placement activity-notifications"><span className="activity-bold">Julie</span> archived the team <span className="activity-bold">Grab</span>.</p>
                <p className ="activity-text-placement activity-time">6 hours ago</p>
             </div>
             <div>
             <img className="activity-images" src="../images/activity-images/anthony.png" alt="Julie"/>
                <p className = "activity-alltext-exceptfirst  activity-text-placement activity-notifications"><span className="activity-bold">Anthony</span> added new leads to <span className="activity-bold">Workday - AU.</span></p>
                <p className ="activity-text-placement activity-time">2 hours ago</p>
             </div>
 */}

        </div>
    )
}


export default Activity;