import App from './app.jsx'
import '../styles/general.css';
export default function general() {
    return (
        <div className='container'>
            <form>
                <div id='name'>
                    <h1>Full Name</h1>
                    <input type="text" />
                </div>
                <div id='email'>
                    <h1>Email</h1>
                    <input type="text" />
                </div>
                <div id='phone'>
                    <h1>Phone Number</h1>
                    <input type="text" />
                </div>
                <div id='address'>
                    <h1>Address</h1>
                    <input type="text" />
                </div>
                <div className='save'>
                    <button id="save-btn">Save</button>
                </div>
            </form>
        </div>
    );
}