import React from "react"
import { useState } from "react";
import Logo from "../../assets/Logo.png"
import "./Sidebar.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleLeft, faMagnifyingGlass,faCircleRight, faHome, faSquarePhone,faBook,faFilter} from "@fortawesome/free-solid-svg-icons";




const Sidebar = (props) => {
    const [inactive, setInactive] = useState(false)
    return <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
            <div classename="logo"> <img className="logo-img"src={Logo} alt="Logo.png" />
             </div>
        <div className="toggle-menu-bttn" > 
        <button className="toggle-menu-bttn" onClick={()=> {setInactive(!inactive);}}>
        {inactive ? <FontAwesomeIcon className="icon" icon={faCircleRight} size="1x" color="lightblue"/> :<FontAwesomeIcon className="icon" icon={faCircleLeft} size="1x" color="lightblue" /> }
        </button>
        </div>
        <div className="Seach-controller">
        <button className="search-Btn">
            <FontAwesomeIcon icon={faMagnifyingGlass}  color="lightblue"/>
            </button>
            <input type="text" placeholder="Seach "/>
           
        </div>
        <div className="spacing"></div>

        <div className="main-menu">
            <ul>
                <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                            <FontAwesomeIcon className="icon" icon={faHome} size="2x" color="lightblue"/>
                       </div> 
                       HOME

                    </a>
                </li>
            </ul>

        </div>
        <div className="main-menu">
            <ul>
                <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                            <FontAwesomeIcon className="icon" icon={faFilter} size="2x" color="lightblue"/>
                       </div> 
                       HOME

                    </a>
                </li>
            </ul>

        </div> <div className="main-menu">
            <ul>
                <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                            <FontAwesomeIcon className="icon" icon={faBook} size="2x" color="lightblue"/>
                       </div> 
                       About Us

                    </a>
                </li>
            </ul>

        </div> <div className="main-menu">
            <ul>
                <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                        <FontAwesomeIcon icon={faSquarePhone} size="2x" /><br/>
                       </div>
                        Contact Us
                       
                      

                    </a>
                </li>
            </ul>

        </div>
    </div>
 </div>
};

export default Sidebar