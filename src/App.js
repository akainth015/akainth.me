import React from 'react';
import './App.css';
import Profile from "./profile/Profile";
import QuickLinks from "./quick-links/QuickLinks";
import Projects from "./projects/Projects";
import WorkExperience from "./work-experience/WorkExperience";
import Education from "./education/Education";

function App() {

    return (
        <div className="app">
            <Profile/>
            <main>
                <QuickLinks/>
                <Projects/>
                <WorkExperience/>
                <Education/>
            </main>
        </div>
    );
}

export default App;
