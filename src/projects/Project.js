import React from "react";

export default function ({img, title, description, target, style}) {
    return (
        <a className="project card" href={target} style={style}>
            {img !== undefined ? <div style={{
                backgroundImage: `url(${img})`
            }}/> : null}
            <div className="text-content">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </a>
    )
}