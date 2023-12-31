import App from './app.jsx'
import '../styles/education.css'
import { useState } from 'react';
export default function education({ onDataSave }) {
    const [JobData, SetJobData] = useState('');
    const [CompanyData, SetCompanyData] = useState('');
    const [SDateData, SetSDateData] = useState('');
    const [EDateData, SetEDateData] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        onDataSave((prevData) => ({
            ...prevData,
            job: JobData,
            company: CompanyData,
            sdate: SDateData,
            edate: EDateData,
        }));
    }

    return (
        <div className='container'>
            <form onSubmit={handleSave}>
                <div>
                    <h1>Job title</h1>
                    <input type="text" name='job' value={JobData} onChange={(e) => SetJobData(e.target.value)} />
                </div>
                <div>
                    <h1>Company</h1>
                    <input type="text" name='company' value={CompanyData} onChange={(e) => SetCompanyData(e.target.value)} />
                </div>
                <div id="date">
                    <div>
                        <h1>Start date</h1>
                        <input type="date" name='start-date' value={SDateData} onChange={(e) => SetSDateData(e.target.value)} />
                    </div>
                    <div>
                        <h1>End date</h1>
                        <input type="date" name='end-date' value={EDateData} onChange={(e) => SetEDateData(e.target.value)} />
                    </div>
                </div>
                <div className='save'>
                    <button id="save-btn" type='submit'>Save</button>
                </div>
            </form>
        </div>
    );
}