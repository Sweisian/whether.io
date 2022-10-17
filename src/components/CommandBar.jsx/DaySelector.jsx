import React from "react";
import Select from "react-select";

export default function DaySelector({ setDay }) {
  function getNextDayOfWeek(dayOfWeek) {
    const date = new Date();
    var resultDate = new Date(date.getTime());

    resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7));

    return resultDate.getTime();
  }

  const options = [
    {
      humanFriendly: "Sunday",
      day: 0,
    },
    {
      humanFriendly: "Monday",
      day: 1,
    },
    {
      humanFriendly: "Tuesday",
      day: 2,
    },
    {
      humanFriendly: "Wednesday",
      day: 3,
    },
    {
      humanFriendly: "Thursday",
      day: 4,
    },
    {
      humanFriendly: "Friday",
      day: 5,
    },
    {
      humanFriendly: "Saturday",
      day: 6,
    },
  ];

  return (
    <div className="command-bar__selector">
      <label>Day of week</label>

      
      <Select
        onChange={(selectedOption) => {
          setDay(getNextDayOfWeek(selectedOption.value.day));
        }}
        options={options.map((op) => {
          return { value: op, label: op.humanFriendly };
        })}
      ></Select>
    </div>
  );
}
