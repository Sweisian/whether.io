import React, { useState } from "react";

import DayInfo from "./components/DayInfo/DayInfo";
import CommandBar from "./components/CommandBar.jsx/CommandBar";
import Ribbon from "./components/Ribbon/Ribbon";

function App() {
  const [day, setDay] = useState(Date.now());

  const [weekCount, setWeekCount] = useState(3);

  const [timeOfDay, setTimeOfDay] = useState({
    humanFriendly: "Afternoon",
    start: 12,
    end: 5,
  });

  const [location, setLocation] = useState("New York");

  const infos = [];
  for (let i = 0; i < weekCount; i++) {
    infos.push(
      <DayInfo
        key={i}
        location={location}
        day={day}
        timeOfDay={timeOfDay}
        weekCount={i}
      />
    );
  }

  return (
    <div className="backdrop">
      <div className="app">
        <Ribbon></Ribbon>
        <div className="app_command-bar">
          <CommandBar
            location={location}
            setLocation={setLocation}
            setDay={setDay}
            setTimeOfDay={setTimeOfDay}
            setWeekCount={setWeekCount}
          />
        </div>
        <div className="app__days">{infos}</div>
      </div>
    </div>
  );
}

export default App;
