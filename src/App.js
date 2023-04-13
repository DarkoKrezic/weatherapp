import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [activities, setActivities] = useState(
    JSON.parse(localStorage.getItem("activities")) || []
  );

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  function handleAddActivity(newActivity) {
    const id = uuidv4();
    const activityWithId = { ...newActivity, id };
    setActivities([...activities, activityWithId]);
  }

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </div>
  );
}

export default App;
