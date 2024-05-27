import React, { useState } from 'react';
import './ListStyles.css';
import Reminder from './Reminder';


const List = () => {
  const [reminders, setReminders] = useState([
    { backgroundColor: '#FFA033', count: 3, name: 'Reminders 1' },
    { backgroundColor: '#793834', count: 3, name: 'Reminders 2' },
    { backgroundColor: '#33FF47', count: 3, name: 'Reminders 3' },
    { backgroundColor: '#2E466B', count: 3, name: 'Reminders 4' },
    { backgroundColor: '#8133FF', count: 3, name: 'Reminders 5' },
  ]);

 /* const addReminder = () => {
    const newReminder = {
      backgroundColor: '#'+(Math.random().toString(16)+'000000').substring(2,8).toUpperCase(),
      count: Math.floor(Math.random() * 10) + 1,
      name: `Reminders ${reminders.length + 1}`,
    };
    setReminders([...reminders, newReminder]);
  };*/

  return (
    <div className="list-container">
      <div className="list-title-container">
        <div className="list-title">My Lists</div>
      </div>
      <div className="reminders-scroll-container">
        {reminders.map((reminder, index) => (
          <Reminder
            key={index}
            backgroundColor={reminder.backgroundColor}
            count={reminder.count}
            name={reminder.name}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
