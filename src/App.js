import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [activities, setActivities] = useState(
    JSON.parse(localStorage.getItem("activities")) || []
  );

  const [isGoodWeather, setIsGoodWeather] = useState(true);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  function handleAddActivity(newActivity) {
    const id = uuidv4();
    const activityWithId = { ...newActivity, id };
    setActivities([...activities, activityWithId]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
    </div>
  );
}

export default App;
