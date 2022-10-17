import React from "react";

import TimeSelector from "./TimeSelector";
import DaySelector from "./DaySelector";
import LocationInput from "./LocationInput";

export default function CommandBar({setDay, setTimeOfDay, location, setLocation}) {
  return (
    <>
      <div>
        <LocationInput location={location} setLocation={setLocation}></LocationInput>
        <TimeSelector setTimeOfDay={setTimeOfDay}></TimeSelector>
        <DaySelector setDay={setDay}></DaySelector>
      </div>
      <div className="divider-line"></div>
    </>
  );
}
