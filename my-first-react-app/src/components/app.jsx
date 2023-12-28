import Experience from './experience.jsx';
import General from './general.jsx';
import Education from './education.jsx';
import { useState } from 'react';

export default function app() {
    const [general, setGeneral] = useState(<><h1>Personal</h1></>);
    const [experience, setExperience] = useState(<><h1>Experience</h1></>);
    const [education, setEducation] = useState(<><h1>Education</h1></>);

    function displayGeneral() {
        setGeneral(< General />)
    }

    function displayExperience() {
        setExperience(< Education />)
    }

    function displayEducation() {
        setEducation(< Experience />)
    }

    return (
        <>
            <div className="drop-menu">
                {general}
                <button onClick={displayGeneral}>toggle</button>
            </div>

            <div className="drop-menu">
                {experience}
                <button onClick={displayExperience}>toggle</button>
            </div>

            <div className="drop-menu">
                {education}
                <button onClick={displayEducation}>toggle</button>
            </div>
        </>
    );
}