import React from 'react';
import './ListStyles.css';
import Reminder from './Reminder';


const List = () => {
  return (
    <div className="list-container">
      <div className="list-title-container">
        <div className="list-title">My Lists</div>
      </div>
      <Reminder backgroundColor={'#FFA033'} count={3} name={'Reminders'} />
      <Reminder backgroundColor={'#793834'} count={3} name={'Reminders'} />
      <Reminder backgroundColor={'#33FF47'} count={3} name={'Reminders'} />
      <Reminder backgroundColor={'#2E466B'} count={3} name={'Reminders'} />
      <Reminder backgroundColor={'#8133FF'} count={3} name={'Reminders'} />
    </div>
  );
};

export default List;
