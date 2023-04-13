import React from "react";

export default function List({ activities, isGoodWeather }) {
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
            {activity.isForGoodWeather ? "good weather" : "bad weather"}
          </li>
        ))}
      </ul>
    </>
  );
}
