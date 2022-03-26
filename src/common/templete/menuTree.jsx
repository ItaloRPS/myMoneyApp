import React from 'react'

export default props =>(
    <li className="treeview">
        <a href="">
            <i className={`fa ${props.icon}`}>{props.label}</i>
            <i className="fa fa-angle-left pull-right"></i>
        </a>
        <ul className="treeview-menu">
            {props.children}
           {console.log(props)} 
        </ul>
    </li>
)