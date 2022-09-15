import './App.css';
import { useState } from 'react';
import Timer from './components/Timer';

// import AddGoal from './components/AddGoal';
// import AddTime from './components/AddTime';
// import Goals from './components/Goals';

function App() {
  const initialGoals = [
    {
      id: 'UpLeveled Graduation Event',
      date: '2022-11-29 09:00',
      displayed: '29th of November 2022',
    },
    { id: 'Christmas', date: '2022-12-24', displayed: '24th of December 2022' },
  ];
  // const [goals, setGoals] = useState(initialGoals);
  const [timeGoal, setTimeGoal] = useState('2023-01-01');
  const [event, setEvent] = useState('New Year');

  /*   const addGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  }; */
  const changeCountdown = (goal) => {
    setTimeGoal(goal.date);
    setEvent(goal.id);
  };

  return (
    <div className="App">
      <h1>Countdown to {event}</h1>
      <Timer timeGoal={timeGoal} />
      <h1>Choose your goal!</h1>
      <div className="goal">
        {initialGoals.map((goal) => (
          <div key={goal.id}>
            <h3>{goal.id}</h3>
            <p>{goal.displayed}</p>
            <button onClick={() => changeCountdown(goal)} className="button">
              Show Countdown
            </button>
          </div>
        ))}
      </div>

      {/* <AddGoal onAdd={addGoal} /> */}
      {/* <Goals goals={goals} onChange={changeCountdown} /> */}
    </div>
  );
}

export default App;
