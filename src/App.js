import './App.css';
import { useState } from 'react';
import AddGoal from './components/AddGoal';
import Goals from './components/Goals';
import Timer from './components/Timer';

// import AddTime from './components/AddTime';

function App() {
  const [goals, setGoals] = useState([
    {
      id: 'UpLeveled Graduation Event',
      date: '2022-11-29 09:00',
      displayed: '29th of November 2022, 9:00',
    },
    { id: 'Christmas', date: '2022-12-24', displayed: '24th of December 2022' },
    { id: 'New Year', date: '2023-01-01', displayed: '1st of January 2023' },
  ]);
  const [timeGoal, setTimeGoal] = useState('2023-01-01');
  const [goalId, setGoalId] = useState('New Year');

  const addGoal = (newGoal) => {
    console.log(newGoal);
    setGoals([...goals, newGoal]);
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };
  const changeCountdown = (goal) => {
    setTimeGoal(goal.date);
    setGoalId(goal.id);
  };

  return (
    <div className="App">
      <h1>Countdown to {goalId}</h1>
      <Timer timeGoal={timeGoal} />
      <h1>Choose your goal!</h1>
      <Goals goals={goals} onChange={changeCountdown} onDelete={deleteGoal} />
      <AddGoal onAdd={addGoal} />
    </div>
  );
}

export default App;
