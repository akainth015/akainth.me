import React from "react";
import './Projects.css';
import Project from "./Project";

const projects = [
    {
        img: "https://lh3.googleusercontent.com/PTjS0WnnBSo3oEdOBpXajmbCHGVlzAtFl_K0mK5YBMF45z0JdAp20Uefak_REPQmQMsfhgvGig=w640-h400-e365",
        title: "Concept",
        description: "Writing essays is a daunting task. Concept makes it easier by offering on the fly analysis in an\n" +
            "easily visible sidebar of Google Docs.",
        target: "https://chrome.google.com/webstore/detail/lmbabfbjfeaeclbdbodkgemdjhmmlabl/publish-accepted?authuser=0",
        style: {
            background: "rebeccapurple",
            color: "white"
        }
    },
    {
        img: "/images/ambient.png",
        title: "Ambient",
        description: "IntelliJ is the most powerful IDE available on the market today. The Ambient plugin lets you submit assignments to WebCAT, and provides more features (like ensuring your code compiles, and reformatting your code automatically).",
        target: "https://plugins.jetbrains.com/plugin/12939-ambient",
        style: {
            background: "gold",
            color: "black"
        }
    },
    {
        img: "/images/capture-the-flag.png",
        title: "Capture the Flag",
        description: "A fun challenge for beginner web developers. This will require you to know how to use your browser's developer tools.",
        target: "https://github.com/akainth015/capture-the-flag",
        style: {
            background: "cadetblue",
            color: "white"
        }
    },
    {
        img: "/images/pulse.png",
        title: "Pulse",
        description: "Pulse is an audio visualizer for your browser, and there is a desktop version as powered by Rainmeter as well.",
        target: "https://akainth015.github.io/pulse",
        style: {
            background: "ghostwhite",
            color: "black"
        }
    }
];

export default function () {
    return (
        <section>
            <h1 id={"#projects"}>Projects</h1>
            <div className="projects">
                {projects.map((project, i) => <Project {...project} key={i}/>)}
            </div>
        </section>
    );
}