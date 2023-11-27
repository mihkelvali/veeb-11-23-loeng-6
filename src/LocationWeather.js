
const convertKmphToMps = (speedKmph) => {
    const speedMps = speedKmph * 1000 / (60 * 60);
    return speedMps.toFixed(1);
}

const convertDateStringToHoursAndMinutes = (dateString) => {
    return `${(new Date(dateString)).getHours()}.${(new Date(dateString)).getMinutes()}`;
}

const LocationWeather = ({ weather }) => (
    <table cellSpacing={24}>
        <thead>
            <th>Date</th>
            <th>Sunrise/sunset</th>
            <th>Temp. min/max</th>
            <th>Precipitation</th>
            <th>Max wind</th>
        </thead>
        <tbody>
            {weather.daily.time.map((_, i) => (
                <tr>
                    <td>{weather.daily.time[i]}</td>
                    <td>{convertDateStringToHoursAndMinutes(weather.daily.sunrise[i])}/{convertDateStringToHoursAndMinutes(weather.daily.sunset[i])}</td>
                    <td>{weather.daily.temperature_2m_min[i]}/{weather.daily.temperature_2m_max[i]}</td>
                    <td>{weather.daily.precipitation_sum[i]}mm</td>
                    <td>{convertKmphToMps(weather.daily.wind_speed_10m_max[i])}m/s</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default LocationWeather;