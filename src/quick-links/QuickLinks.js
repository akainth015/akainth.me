import React from "react";
import QuickLink from "./QuickLink";
import {AiFillFileText, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail} from "react-icons/ai";

export default function () {
    return (
        <section>
            <h1>Quick Links</h1>
            <div className="card quick-links">
                <QuickLink Icon={AiFillGithub} label="GitHub" target="https://github.com/akainth015"/>
                <QuickLink Icon={AiFillInstagram} label="Instagram" target="https://instagram.com/akainth015"/>
                <QuickLink Icon={AiFillLinkedin} label="LinkedIn" target="https://linkedin.com/in/akainth015"/>
                <QuickLink Icon={AiFillFileText} label="Resume" target="https://linkedin.com/in/akainth015"/>
                <QuickLink Icon={AiFillMail} label="aanand@akainth.me" target="mailto:aanand@akainth.me"/>
            </div>
        </section>
    )
}