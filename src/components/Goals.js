function Goals({ goals, onChange, onDelete }) {
  return (
    <div className="goal">
      {goals.map((goal) => (
        <div key={goal.id} className="goals">
          <h3>{goal.id}</h3>
          <p>{goal.displayed}</p>
          <button onClick={() => onChange(goal)} className="button">
            Show Countdown
          </button>
          <button onClick={() => onDelete(goal.id)} className="button btn-del">
            Delete Countdown
          </button>
        </div>
      ))}
    </div>
  );
}

export default Goals;
