import React, { useState, useEffect } from 'react';
import './ListStyles.css';
import Reminder from './Reminder';
import { getTasks, addTask, updateTask, removeTask } from './TaskStorage';

const generateColor = (index: number) => {
  const hue = (index * 137.508) % 360; // use the golden angle approximation
  return `hsl(${hue}, 70%, 50%)`;
};

interface ListProps {
  onSelectTag: (tag: string) => void;
}

const List: React.FC<ListProps> = ({ onSelectTag }) =>  {
  
  const [reminders, setReminders] = useState<{ backgroundColor: string, count: number, name: string }[]>([]);

  useEffect(() => {
    const loadReminders = async () => {
      const tasks = await getTasks();

      // Count tasks by tag
      const tagCounts: { [key: string]: number } = {};
      tasks.forEach(task => {
        if (tagCounts[task.tag]) {
          tagCounts[task.tag]++;
        } else {
          tagCounts[task.tag] = 1;
        }
      });

      // Assign distinct colors to each tag
      const tagColors: { [key: string]: string } = {};
      // const colors = ['#FFA033', '#793834', '#33FF47', '#2E466B', '#8133FF'];
      let colorIndex = 0;

      const newReminders = Object.keys(tagCounts).map(tag => {
        if (!tagColors[tag]) {
          tagColors[tag] = generateColor(colorIndex); // colors[colorIndex % colors.length];
          colorIndex++;
        }

        return {
          backgroundColor: tagColors[tag],
          count: tagCounts[tag],
          name: tag,
        };
      });

      setReminders(newReminders);
    };

    loadReminders();
  }, []);


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
            onClick={() => onSelectTag(reminder.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default List;


 /* const addReminder = () => {
    const newReminder = {
      backgroundColor: '#'+(Math.random().toString(16)+'000000').substring(2,8).toUpperCase(),
      count: Math.floor(Math.random() * 10) + 1,
      name: `Reminders ${reminders.length + 1}`,
    };
    setReminders([...reminders, newReminder]);
  };*/