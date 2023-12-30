import App from './app.jsx'
import { useState } from 'react';
export default function experience() {
    const [DegreeData, SetDegreeData] = useState('');
    const [SchoolData, SetSchoolData] = useState('');
    const [CityData, SetCityData] = useState('');
    const [CountryData, SetCountryData] = useState('');

    return (
        <div className='container'>
            <form>
                <div id="degree">
                    <h1>Degree</h1>
                    <input type="text" name='degree' value={DegreeData} onChange={(e) => SetDegreeData(e.target.value)} />
                </div>
                <div id="school">
                    <h1>School</h1>
                    <input type="text" name='school' value={SchoolData} onChange={(e) => SetSchoolData(e.target.value)} />
                </div>
                <div id="city">
                    <h1>City</h1>
                    <input type="text" name='city' value={CityData} onChange={(e) => SetCityData(e.target.value)} />
                </div>
                <div id="country">
                    <h1>Country</h1>
                    <input type="text" name='country' value={CountryData} onChange={(e) => SetCountryData(e.target.value)} />
                </div>
                <div className='save'>
                    <button id="save-btn" type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}
