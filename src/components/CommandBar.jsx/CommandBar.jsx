import React from "react";

import TimeSelector from "./TimeSelector";
import DaySelector from "./DaySelector";
import LocationInput from "./LocationInput";

export default function CommandBar({setDay, setTimeOfDay, location, setLocation}) {
  return (
    <>
      <div className="command-bar__container">
        <LocationInput  location={location} setLocation={setLocation}></LocationInput>
        <DaySelector setDay={setDay}></DaySelector>
        <TimeSelector setTimeOfDay={setTimeOfDay}></TimeSelector>
      </div>
      <div className="divider-line"></div>
    </>
  );
}
