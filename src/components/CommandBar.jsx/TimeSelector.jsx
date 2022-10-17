import React from "react";

import Select from "react-select";

export default function TimeSelector({ setTimeOfDay }) {
  const options = [
    {
      humanFriendly: "Morning",
      start: 8,
      end: 12,
    },
    {
      humanFriendly: "Afternoon",
      start: 12,
      end: 17,
    },
    {
      humanFriendly: "Evening",
      start: 17,
      end: 21,
    },
  ];

  return (
    <div className="command-bar__selector">
      <label>Time of Day</label>
      <Select
        onChange={(selectedOption) => {
          setTimeOfDay(selectedOption.value);
        }}
        options={options.map((op) => {
          return { value: op, label: op.humanFriendly };
        })}
      ></Select>
    </div>
  );
}
