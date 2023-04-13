export default function Form({ onAddActivity }) {
  return (
    <form>
      <h1>Add new activity</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" required />
      <label htmlFor="weatherCheckBox">Good Weather Activity</label>
      <input type="checkbox" id="weatherCheckBox" />
      <button type="submit">Submit</button>
    </form>
  );
}
