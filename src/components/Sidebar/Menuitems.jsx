import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";

const MenuItem = (props) => {
    const {name, subMenus, iconClassName, onClick,to} = props;
    const[expand, setExpand] = useState(false);
    return(
        <li onClick={props.onClick}>
        <NavLink to={to} onClick={()=> setExpand(! expand)} className="menu-item">
            <div className="menu-icon">
                <FontAwesomeIcon icon={iconClassName}/>
            </div>
           <span>{name}</span>
           </NavLink>
           {subMenus && subMenus.length > 0 ? (
           
            <ul className={`sub-menu ${expand ? 'active' : ''}` }>
                {subMenus.map((menu, index)=> <li key={index}>
                    <NavLink to={menu.to}> {menu.name}</NavLink>

                </li>
                )}

            </ul>
            ) : null}

    </li>
    );
}

export default MenuItem;