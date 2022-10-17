import React from "react";

import styles from "../../sass/main.scss";

const WeatherText = ({ weatherData  }) => {
  const day = weatherData.days[0];
  const precipProb = Math.round(day.precipprob);

  //Only handles farenheit
  //Doesn't handle other precip types, only rain
  return (
    <div className="weatherText__container">
      <img
        src={require(`../../assets/visualCrossing/${day.icon}.png`)}
        alt={day.icon}
      />
      <div>
        <div>
          {day.conditions} {day.temp} °F
        </div>
        <div className={"small"}>winds {Math.round(day.windspeed)}mph</div>

        {
          <div className={"small"}>
            {precipProb > 0 ? precipProb + " chance rain" : "no rain"}
          </div>
        }
      </div>
    </div>
  );
};

export default WeatherText;
