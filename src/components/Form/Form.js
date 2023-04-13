import { useState, useRef } from "react";

function Form({ onAddActivity }) {
  const [name, setName] = useState("");
  const isForGoodWeather = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      isForGoodWeather: isForGoodWeather.current.checked,
    };

    onAddActivity(data);

    setName("");
    isForGoodWeather.current.checked = false;
    document.querySelector("#name").focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
      <label htmlFor="name">Activity Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label>
        <input type="checkbox" ref={isForGoodWeather} />
        Is it a good-weather activity?
      </label>
      <button type="submit">Add Activity</button>
    </form>
  );
}

export default Form;
