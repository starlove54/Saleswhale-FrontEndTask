import React from "react";
import Card from "./Card";



function Navbar({setData}){

    const lowernavitems = document.querySelectorAll(".lowernavitem");

      function selectItem(){
        removeBorder();
        this.classList.add("navbar-lowerbar-below-selected");
      }

      function removeBorder(){
        lowernavitems.forEach(item => item.classList.remove("navbar-lowerbar-below-selected"));
      }

      //listen for lowernavitem click
      lowernavitems.forEach(item => item.addEventListener("click", selectItem));


      const [state, setState] = React.useState("All-tab");

      function setStateToOne(){
        setState("All-tab");

      }

      function setStateToTwo(){
        setState("Favourites-tab");

      }

      function setStateToThree(){
        setState("Archive-tab");

      }



 

      console.log(state)
    return (
       
        <div className="navbar">
        
        <div className="navbar-upperbar">
        <div className="navbar-upperbar-1stitem">
            <p>NARWHAL</p>
        </div>
        <hr className="navbar-verticalline"/>
        <div  className="navbar-upperbar-2nditem">
            <p>Teams</p>
        </div>
        <div className = "navbar-upperbar-3rditem">
        <img src="../images/navbar-images/menu notification.png" alt="notification"/>
            <p className="navbar-greetings">Hello, John</p>
        <img src="../images/navbar-images/john.png" alt="notification"/>
        <img src="../images/navbar-images/caret down.png" alt="notification"/>
        </div>
        </div>
        <hr className="navbar-breakline"/>
        <div className="navbar-lowerbar">
        <div className="navbar-lowerbar-upper">
        <div className="navbar-lowerbar-upper-1stitem">
        <img src="../images/navbar-images/icon companies.svg" alt="icon-companies"/>
        </div>
        <div className="navbar-lowerbar-upper-2nditem">
        <p>Teams</p>    
        </div>
        <div className="navbar-lowerbar-upper-3rditem">
        <button className="navbar-button"><img className="navbar-button-plusicon" src="../images/navbar-images/Shape.svg" alt="plus-icon" /><span className="navbar-button-text">CREATE NEW TEAM</span></button>
        </div>
        </div>
        <div className="navbar-lowerbar-below">

            <div onClick={setStateToOne} className="lowernavitem navbar-lowerbar-below-selected navbar-lowerbar-below-1stitem "><p>All</p></div>
            <div onClick={setStateToTwo} className="lowernavitem navbar-lowerbar-below-2nditem"><p>Favorites</p></div>
            <div onClick={setStateToThree} className="lowernavitem navbar-lowerbar-below-3rditem"><p>Archived</p></div>
            <div className="navbar-lowerbar-below-4thitem"><img src="../images/navbar-images/icon-search.svg" alt="magnifying glass"/></div>
            <div className="navbar-lowerbar-below-5thitem"><input className="navbar-input-search" placeholder="Search team name ..." type="text" id="search" name="search"></input></div>
            
        </div>
        </div>
        </div>

        
     )
}
export default Navbar;
