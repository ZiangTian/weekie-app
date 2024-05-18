import React from 'react';
import { Scheduler } from '@aldabil/react-scheduler';
import { EVENTS } from '../events';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home page!</p>
      <Scheduler events={EVENTS} />
    </div>
  );
};

export default Home;
