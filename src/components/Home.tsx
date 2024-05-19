// import React from 'react';
// import { Scheduler } from '@aldabil/react-scheduler';
// import { EVENTS } from '../events';

// const Home: React.FC = () => {
//   return (
//     <div>
//       <h2>Home</h2>
//       <p>Welcome to the Home page!</p>
//       <div style={{width: '100%', height: '100%', background: '#F4BE4B'}}> sadjlk </div> 
//       <Scheduler events={EVENTS} />
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu'; 
import EMat from '../components/EMat'; 
import './HomeStyles.css';
import { Scheduler } from '@aldabil/react-scheduler';
import { EVENTS } from '../events';
import Reminder from '../components/Reminder';
import List from '../components/Lists';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="header">
        <Header title='Schedule' />
      </div>
      
      <div className="menu">
        <Menu />
      </div>
      
      <div className = "emat">
      <EMat />
      </div>

      <div className = 'scheduler'>
      <Scheduler events={EVENTS} />
      </div>
    </div>
  );
};

export default Home;

