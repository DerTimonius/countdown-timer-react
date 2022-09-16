import { useEffect, useState } from 'react';

function Timer({ timeGoal }) {
  function calculateTime() {
    const goal = new Date(timeGoal);
    const now = new Date();
    const difference = goal - now;
    let calculatedTime = [];
    if (difference > 0) {
      calculatedTime = [
        {
          id: 'year',
          value: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
        },
        {
          id: 'day',
          value: Math.floor((difference / (1000 * 60 * 60 * 24)) % 365),
        },
        {
          id: 'hour',
          value: Math.floor((difference / (1000 * 60 * 60)) % 24),
        },
        { id: 'minute', value: Math.floor((difference / (1000 * 60)) % 60) },
        { id: 'second', value: Math.floor(difference / 1000) % 60 },
      ];
    }
    return calculatedTime;
  }
  const [calculatedTime, setCalculatedTime] = useState(calculateTime());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCalculatedTime(calculateTime());
    }, 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="timer">
      {calculatedTime.length > 0
        ? calculatedTime.map((item) => {
            return (
              <span key={item.id} id={item.id}>
                {item.value} {item.value !== 1 ? `${item.id}s` : item.id}{' '}
              </span>
            );
          })
        : "Time's up!"}
    </div>
  );
}

export default Timer;
