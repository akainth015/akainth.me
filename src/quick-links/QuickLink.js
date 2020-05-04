import React from "react";
import './QuickLink.css';

export default function ({Icon, label, target}) {
    return (
        <a className="quick-link" href={target}>
            <Icon/>
            {label}
        </a>
    )
}