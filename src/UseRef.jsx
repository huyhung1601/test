import React, { useState, useEffect, useRef } from "react";

function useRefs() {
  const onScreenData = useRef({});
  const [inputs, setInputs] = useState({});

  const onInputChange = e => {
    const {name,value} = e.target;
    const updatedInputs = { ...inputs, [name]: value };
    setInputs(updatedInputs);
    onScreenData.current = updatedInputs;
  };

  useEffect(
    () => () => {
      saveScreenData(onScreenData.current);
    },
    []
  );

  return (
    <div>
      <h2>Use refs to get the latest inputs value</h2>
      <label>Title: </label>
      <input name="title" value={inputs.title || ""} onChange={onInputChange} />
      <label>Note: </label>
      <input name="note" value={inputs.note || ""} onChange={onInputChange} />
    </div>
  );
}

const saveScreenData = data => {
  console.log(data)
};
export default useRefs;