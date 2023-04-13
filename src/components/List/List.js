import React from "react";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  function handleDelete(id) {
    onDeleteActivity(id);
  }

  return (
    <>
      <h2>
        {isGoodWeather
          ? "The Weather is awesome! Good Weather Activities:"
          : "Bad Weather :( You can do:"}
      </h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name} -{" "}
            {activity.isForGoodWeather ? "good weather" : "bad weather"}{" "}
            <button onClick={() => handleDelete(activity.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}
