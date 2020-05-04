import React from 'react';
import './Profile.css';

export default function Profile() {
    // noinspection HtmlUnknownTarget, HtmlUnknownAnchorTarget
    return (
        <div className="profile">
            <img alt="" className="profile-img" src="/profile.jpg"/>
            <h1>Aanand Kainth</h1>
            <h2>Software Engineer</h2>
            <nav>
                <a href="#projects">Projects</a>
                <a href="#work-experience">Work Experience</a>
                <a href="#education">Education</a>
            </nav>
        </div>
    );
}