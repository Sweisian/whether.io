import React, { useState } from "react";

import DayInfo from "./components/DayInfo/DayInfo";
import CommandBar from "./components/CommandBar.jsx/CommandBar";

function App() {
  const [day, setDay] = useState(Date.now());

  const [timeOfDay, setTimeOfDay] = useState({
    humanFriendly: "Afternoon",
    start: 12,
    end: 5,
  });

  const [location, setLocation] = useState("New York");

  return (
    <div className="app">
      <div className="app_command-bar">
        <CommandBar
          location={location}
          setLocation={setLocation}
          setDay={setDay}
          setTimeOfDay={setTimeOfDay}
        />
      </div>
      <div className="app__days">
        <DayInfo location={location} day={day} timeOfDay={timeOfDay} />
        <DayInfo location={location} day={day} timeOfDay={timeOfDay} />
      </div>
    </div>
  );
}

export default App;
