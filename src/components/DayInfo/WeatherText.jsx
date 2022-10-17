import React from "react";

import styles from "../../sass/main.scss";
import rainDrops from "../../assets/noun-rain-drops.png";
import wind from "../../assets/noun-wind.png";

const WeatherText = ({ weatherData }) => {
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
      <div className="weatherText__small-text">
        <div>
          {day.conditions} {day.temp} °F
        </div>
        <div className={"small vert-center"}>
          <img className="icon-sm mr-sm" src={wind} />
          winds {Math.round(day.windspeed)}mph
        </div>
        {
          <div className={"small vert-center"}>
            <img className="icon-sm mr-sm" src={rainDrops} />
            {precipProb > 0 ? precipProb + "% chance of rain" : "no rain"}
          </div>
        }
      </div>
    </div>
  );
};

export default WeatherText;
