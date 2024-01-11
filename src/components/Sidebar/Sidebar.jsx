import React from "react"
import { useState } from "react";
import MenuItem from "./Menuitems.jsx"
import Logo from "../../assets/Logo.png"
import Jewelery from "../Products/Category.jsx";


import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleLeft, faMagnifyingGlass,faCircleRight, faHome,faBook,faFilter, faPhone} from "@fortawesome/free-solid-svg-icons";
import Products from "../Products/AllProducts.jsx";


const menuItem = [
    {name:'Home', to:`/`, iconClassName: faHome },
    {name: 'Filter',  
    subMenus:[{name:"Mens Clothing", to:"/category/men's%20clothing"},{name:"Women Clothing", to:"/category/women's%20clothing"},{name:"Jewelery", to:"/category/jewelery"},{name:'Electronics', to:'/category/electronics'}],iconClassName: faFilter },
    {name:'About Us', to:`/AboutUs`, iconClassName: faBook},
    {name: 'Contact Us', to:`/ContactUs`, iconClassName: faPhone }
]
const Sidebar = (props) => {
    const [inactive, setInactive] = useState(false)
    return (
        <>
       
        <div className={`side-menu ${inactive ? 'inactive' : "" }`}>
            <div className="top-section">
                <div className="logo">
                    <img src={Logo} alt="webscript"/>
                </div>
                <div onClick={()=> setInactive(!inactive)}  className="toggle-menu-btn">
                  {inactive ? <FontAwesomeIcon icon={faCircleRight}/> : <FontAwesomeIcon icon={faCircleLeft}/>}
                </div>
            </div>
            <div className="search-controller">
                <button className="search-btn">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
                <input type="text" placeholder="Search"/>
            </div>
            <div className="divider"></div>
            <div className="main-menu">
                <ul>
                    {
                        menuItem.map((menuItem, index)=>
                        (
                            <MenuItem 
                            key={index}
                            name={menuItem.name}
                            to={menuItem.to}
                            subMenus={menuItem.subMenus || []}
                            iconClassName={menuItem.iconClassName}
                            onClick={()=>{
                                if(inactive){setInactive(false);}
                            }}
                            />
                        ) )
                    }
                  
                </ul>

            </div>
           
        </div>
        </>
        
    )


};

export default Sidebar