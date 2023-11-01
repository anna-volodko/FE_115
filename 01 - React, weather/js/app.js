const weatherList = [
    {
        city: 'Lisbon',
        temp: '21°',
        icon: 'wi wi-day-sunny',
        width: 'w_50'
    },
    {
        city: 'Paris',
        temp: '11°',
        icon: 'wi wi-night-sleet',
        width: 'w_25'
    },
    {
        city: 'Belgrade',
        temp: '15°',
        icon: 'wi wi-day-cloudy',
        width: 'w_25'
    },
    {
        city: 'Venice',
        temp: '21°',
        icon: 'wi wi-day-cloudy-high',
        width: 'w_25'
    },
    {
        city: 'Tel-Avive',
        temp: '32°',
        icon: 'wi wi-hot',
        width: 'w_25'
    },
    {
        city: 'Cair',
        temp: '21°',
        icon: 'wi wi-day-sunny',
        width: 'w_25'
    },
    {
        city: 'New-York',
        temp: '17°',
        icon: 'wi wi-day-thunderstorm',
        width: 'w_25'
    },
    {
        city: 'New-Delhi',
        temp: '17°',
        icon: 'wi wi-night-hail',
        width: 'w_25'
    },
    {
        city: 'San-Francisko',
        temp: '15°',
        icon: 'wi wi-day-cloudy',
        width: 'w_50'
    },
    {
        city: 'Tokyo',
        temp: '8°',
        icon: 'wi wi-night-clear',
        width: 'w_25'
    },
    {
        city: 'Sydney',
        temp: '25°',
        icon: 'wi wi-night-cloudy',
        width: 'w_100'
    },
]


function App() {
    return (
        <div className="wrapper">
            <h1>CSS Weather Forecast</h1>
                <div className="main_table">
                   <WeatherTable weatherList={weatherList}/>
                </div>
            <h2>Have a nice day and don't forget umbrella if you are in New Delhi now!</h2>
        </div>
    )
}
function WeatherTable(props) {
    const {weatherList} = props;

    return (
        <ul className="weather_table">
            {weatherList.map((weather,index) => 
            <li key={index} className={`weather_item ${weather.width}`}>{weather.city} - {weather.temp}C <i className={weather.icon}></i></li>
            )}
        </ul>
    )
}


const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))