import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [activities, setActivities] = useState(
    JSON.parse(localStorage.getItem("activities")) || []
  );
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
    };
    fetchWeatherData();
  });

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  function handleAddActivity(newActivity) {
    const id = uuidv4();
    const activityWithId = { ...newActivity, id };
    setActivities([...activities, activityWithId]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  return (
    <div>
      <h1>
        {weather.condition} {weather.temperature}°C
      </h1>
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
