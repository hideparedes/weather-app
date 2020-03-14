import React from 'react'
import ForcastCard from '../forcast-card/ForcastCard'

const Forecast = () => {

  const weather = [{temp: "32"}, {temp: "30"},{temp: "36"},{temp: "35"},{temp: "40"},]

  return (
    <div>
      <h2>Weather Forcast</h2>
      <ul>
        {
          weather.map(day => <ForcastCard temp={day.temp} />)
        }
      </ul>
    </div>
  )
}

export default Forecast
