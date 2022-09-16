import { useState } from 'react';
import { displayDate, getDate } from '../date.js';

function AddGoal({ onAdd }) {
  const [goalName, setGoalName] = useState('');
  const [goalDay, setGoalDay] = useState('');
  const [goalTime, setGoalTime] = useState('00:00');

  const newGoal = {
    id: goalName,
    date: getDate(goalDay, goalTime),
    displayed: displayDate(goalDay, goalTime),
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onAdd(newGoal);
      }}
    >
      <label htmlFor="id">Your goal</label>
      <input
        name="id"
        id="id"
        value={goalName}
        onChange={(event) => setGoalName(event.target.value)}
      />
      <label htmlFor="day">Day</label>
      <input
        type="date"
        name="day"
        id="goalDay"
        value={goalDay}
        onChange={(event) => setGoalDay(event.target.value)}
      />

      <label htmlFor="time">Time</label>
      <input
        type="time"
        name="time"
        id="time"
        value={goalTime}
        onChange={(event) => setGoalTime(event.target.value)}
      />
      <input type="submit" value="Save Countdown" className="button" />
    </form>
  );
}

export default AddGoal;
