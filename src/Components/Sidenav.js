import React from "react";

function Sidenav(){
    return ( 
        <nav className="sidenav">
        <div className = "sidenav-icons-1">
        <img src="../images/sw-logo-white.png" alt ="sw-logo-white"/>        
        <img src="../images/icon-campaign.svg" alt ="icon-campaign"/>        
        <img src="../images/icon-teams.svg" alt ="icon-teams"/>        
        <img src="../images/icon-leads.svg" alt ="icon-leads"/>        
        <img src="../images/icon-reports.svg" alt ="icon-reports"/>        
        </div>
        <div className="sidenav-icons-2">
        <img src="../images/icon-help.svg" alt ="icon-help"/>        
        </div>
        <div className="square"></div>
        </nav>
    )
}

export default Sidenav;
