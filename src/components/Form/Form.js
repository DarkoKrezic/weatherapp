import { useState } from "react";

export default function Form({ onAddActivity }) {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new activity</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="isForGoodWeather" name="isForGoodWeather">
        Good Weather Activity
      </label>
      <input
        type="checkbox"
        id="isForGoodWeather"
        onChange={(currywurst) =>
          setIsForGoodWeather(currywurst.target.checked)
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
}
