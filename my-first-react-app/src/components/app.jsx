import Experience from './experience.jsx';
import General from './general.jsx';
import Education from './education.jsx';
import { useState } from 'react';
import '../styles/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

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

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const onDataSave = (newData) => {
        setData(newData);
    }

    return (
        <>
            <div className='section1'>
                <div className="drop-menu">
                    <h1>Personal</h1>
                    <button onClick={displayGeneral}>
                        {general ? <FontAwesomeIcon icon={faToggleOff} className="toggle" /> : <FontAwesomeIcon icon={faToggleOn} className='toggle' />}
                    </button>
                    {general && <General onDataSave={onDataSave} />}
                </div>

                <div className="drop-menu">
                    <h1>Education</h1>
                    <button onClick={displayExperience}>
                        {experience ? <FontAwesomeIcon icon={faToggleOff} className='toggle' /> : <FontAwesomeIcon icon={faToggleOn} className='toggle' />}
                    </button>
                    {experience && <Experience />}
                </div>

                <div className="drop-menu">
                    <h1>Experience</h1>
                    <button onClick={displayEducation}>
                        {education ? <FontAwesomeIcon icon={faToggleOff} className='toggle' /> : <FontAwesomeIcon icon={faToggleOn} className='toggle' />}
                    </button>
                    {education && <Education />}
                </div>
            </div>
            <div className='section2'>
                <div id='header'>
                    <div id="full-name"><h1>{data.name}</h1></div>
                    <div id="contact">
                        <div>{data.email}</div>
                        <div>{data.phone}</div>
                        <div>{data.address}</div>
                    </div>
                </div>
                <div id='body'></div>
            </div>
        </>
    );
}