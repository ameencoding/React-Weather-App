import React from 'react';
import '../css/dashboard.css';
import '../css/media.css';

const Dashboard = (props) => {
    const { Submit, Changed, AllData } = props;

    return (
        <React.Fragment>
            <h3 className='h3_title'>{AllData.error ? AllData.error : 'Weather Dashboard'}</h3>
            <div className='weather'>
                <form className='form' onSubmit={Submit}>
                    <input type='text' placeholder='City Name' value={AllData.city} onChange={Changed} />
                    <button>Search</button>
                </form>

                {AllData.isLoaded || !AllData.data ? ''
                    : <React.Fragment>
                        <div className='temp'>
                            <div className="temp_text">{Math.round(AllData.data.main.temp - 273)}<span>°C</span></div>
                        </div>
                        <div className='footer'>
                            <ul>
                                <li>Country: <span>{AllData.data.sys.country}</span></li>
                                <li>Sunrise: <span>{new Date(AllData.data.sys.sunrise * 1000).toLocaleTimeString()} </span></li>
                                <li>Sunset: <span>{new Date(AllData.data.sys.sunset * 1000).toLocaleTimeString()}</span></li>
                            </ul>
                        </div>
                    </React.Fragment>}
            </div>
        </React.Fragment>);
}

export default Dashboard;