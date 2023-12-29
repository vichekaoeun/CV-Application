import App from './app.jsx'
import '../styles/education.css'
export default function education() {
    return (
        <div className='container'>
            <form>
                <div>
                    <h1>Job title</h1>
                    <input type="text" />
                </div>
                <div>
                    <h1>Company</h1>
                    <input type="text" />
                </div>
                <div id="date">
                    <div>
                        <h1>Start date</h1>
                        <input type="date" />
                    </div>
                    <div>
                        <h1>End date</h1>
                        <input type="date" />
                    </div>
                </div>
                <div className='save'>
                    <button id="save-btn">Save</button>
                </div>
            </form>
        </div>
    );
}