import React from 'react'

export default props =>(
    <li>
        <a href={props.path}>
            <i className={`fa ${props.icon}`}>{props.label}</i>
        </a>
    </li>
)