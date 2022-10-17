import React, { useCallback, useState } from "react";

import debounce from "lodash.debounce";

export default function LocationInput({ setLocation, location }) {
  const [localLocation, setLocalLocation] = useState(location);

  const onChangeHandler = (value) => {
    console.log("DEBOUNCING");
    setLocation(value);
  };

  const debouncedChangeHandler = useCallback(debounce(onChangeHandler, 500), [
    location,
  ]);

  return (
    <input
      value={localLocation}
      onChange={(event) => {
        setLocalLocation(event.target.value);
        debouncedChangeHandler(event.target.value);
      }}
    ></input>
  );
}
