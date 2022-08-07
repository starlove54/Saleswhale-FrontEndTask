import React from "react";
import Sidenav from "./Sidenav";
import Navbar from "./Navbar";
import Teams from "./Teams";
import Activity from "./Activity";
import Card  from "./Card";

function App() {
    
    return (
        <main className="main">
        <section className="main-sidenav-navbar">
        <Sidenav/>
        <Navbar/>
        </section>
        <section className ="main-teams-activity">
        <Teams/>
        <Activity/>
        </section>
        </main>
    )
}


export default App;