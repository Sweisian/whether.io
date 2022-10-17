import React from "react";

import WeatherChart from "./WeatherChart";

import weatherData from "./TESTING";
import WeatherText from "./WeatherText";

export default function DayInfo({day, timeOfDay}) {

  return (
    <div className={"day__container"}>
      <h1>This {day.dayOfWeek} the {day.numberOfMonth}</h1>
      <WeatherText weatherData={weatherData}/>
      <WeatherChart weatherData={weatherData} />
    </div>
  );
}
