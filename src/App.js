import React, { useState } from "react";

import DayInfo from "./components/DayInfo/DayInfo";
import CommandBar from "./components/CommandBar.jsx/CommandBar";
import Ribbon from "./components/Ribbon/Ribbon";

function App() {
  const [day, setDay] = useState(Date.now());

  const [weekCount, setWeekCount] = useState(0)

  const [timeOfDay, setTimeOfDay] = useState({
    humanFriendly: "Afternoon",
    start: 12,
    end: 5,
  });

  const [location, setLocation] = useState("New York");

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
          />
        </div>
        <div className="app__days">
          <DayInfo location={location} day={day} timeOfDay={timeOfDay} weekCount={0}/>
          <DayInfo location={location} day={day} timeOfDay={timeOfDay} weekCount={1}/>
        </div>
      </div>
    </div>
  );
}

export default App;
