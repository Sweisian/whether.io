import React from "react";

import map from "../../assets/noun-map.png";

import TimeSelector from "./TimeSelector";
import DaySelector from "./DaySelector";
import LocationInput from "./LocationInput";

export default function CommandBar({
  setDay,
  setTimeOfDay,
  location,
  setLocation,
  setWeekCount,
}) {
  return (
    <>
      <div className="command-bar__container">
        <div className="vert-center mr-auto">
          <img className="mr-sm icon-md" src={map}></img>
          <LocationInput
            location={location}
            setLocation={setLocation}
          ></LocationInput>
        </div>

        <DaySelector setDay={setDay}></DaySelector>
        <TimeSelector setTimeOfDay={setTimeOfDay}></TimeSelector>
        <div className="vert-center">
          <button
            className="command-bar__button"
            onClick={() => setWeekCount((prev) => Math.max(prev - 1, 1))}
          >
            -
          </button>
          <button
            className="command-bar__button"
            onClick={() => setWeekCount((prev) => Math.min(prev + 1, 3))}
          >
            +
          </button>
        </div>
      </div>
      <div className="divider-line"></div>
    </>
  );
}
