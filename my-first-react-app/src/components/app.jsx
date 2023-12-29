import Experience from './experience.jsx';
import General from './general.jsx';
import Education from './education.jsx';
import { useState } from 'react';

export default function app() {

    const [general, setGeneral] = useState(false);
    const [experience, setExperience] = useState(false);
    const [education, setEducation] = useState(false);

    function displayGeneral() {
        setGeneral(!general);
    }

    function displayExperience() {
        setExperience(!experience);
    }

    function displayEducation() {
        setEducation(!education);
    }

    return (
        <>
            <div className="drop-menu">
                <h1>Personal</h1>
                <button onClick={displayGeneral}>
                    {general ? 'untoggle' : 'toggle'}
                </button>
                {general && <General />}
            </div>

            <div className="drop-menu">
                <h1>Education</h1>
                <button onClick={displayExperience}>
                    {experience ? 'untoggle' : 'toggle'}
                </button>
                {experience && <Experience />}
            </div>

            <div className="drop-menu">
                <h1>Experience</h1>
                <button onClick={displayEducation}>
                    {education ? 'untoggle' : 'toggle'}
                </button>
                {education && <Education />}
            </div>
        </>
    );
}