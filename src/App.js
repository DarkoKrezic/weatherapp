import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form/Form";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    const id = uuidv4();
    const activityWithId = { ...newActivity, id };
    setActivities([...activities, activityWithId]);
  }

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name} -{" "}
            {activity.isForGoodWeather ? "good weather" : "bad weather"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
