import App from './app.jsx'
export default function experience() {
    return (
        <div className='container'>
            <form>
                <div id="degree">
                    <h1>Degree</h1>
                    <input type="text" />
                </div>
                <div id="school">
                    <h1>School</h1>
                    <input type="text" />
                </div>
                <div id="City">
                    <h1>City</h1>
                    <input type="text" />
                </div>
                <div id="degree">
                    <h1>Degree</h1>
                    <input type="text" />
                </div>
                <div id="country">
                    <h1>Country</h1>
                    <input type="text" />
                </div>
                <div className='save'>
                    <button id="save-btn">Save</button>
                </div>
            </form>
        </div>
    )
}