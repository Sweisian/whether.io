import React, { useState, useEffect } from "react";
import useFetch from "use-http";

import WeatherChart from "./WeatherChart";
import WeatherText from "./WeatherText";

import weatherData from "./TESTING";

export default function DayInfo({ day, timeOfDay, location, weekCount }) {
  const [weatherData, setWeatherData] = useState(null);
  const { get, post, response, loading, error } = useFetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline"
  );

  const milliSecondsPerWeek = 7 * 24 * 60 * 60 * 1000
  const shiftedDay = day + milliSecondsPerWeek * weekCount

  console.log("shiftedDay", shiftedDay)

  useEffect(() => {
    // Normally, I would never hard use an API key, it would get injected in the
    // CI/CD pipeline or a keyvault would be used
    const formattedDate = new Date(shiftedDay).toISOString().split("T")[0];

    const queryString = `/${location}/${formattedDate}?key=KH7AHTNWUTDZGAK98ZPYDXH9H`;
    fetchData(queryString);
  }, [shiftedDay, location]); // componentDidMount

  async function fetchData(queryString) {
    const data = await get(queryString);
    if (response.ok) {
      setWeatherData(data);
    }
  }

  const nth = function (d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayDateTime = new Date(shiftedDay);

  return (
    <div className={"day__container"}>
      <h1>
        {weekday[dayDateTime.getDay()]} the{" "}
        {dayDateTime.getDate().toString() + nth(dayDateTime.getDate())}
      </h1>
      {weatherData ? (
        <>
          <WeatherText
            day={day}
            weatherData={weatherData}
            timeOfDay={timeOfDay}
          />
          <WeatherChart weatherData={weatherData} timeOfDay={timeOfDay} />
        </>
      ) : null}
    </div>
  );
}
