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
import Menu from '../components/Menu'; // 将来可以添加 Menu 组件
import EMat from '../components/EMat'; // 将来可以添加 GradientComponent 组件
import './HomeStyles.css';
import { Scheduler } from '@aldabil/react-scheduler';
import { EVENTS } from '../events';
import Reminder from '../components/Reminder';
import List from '../components/Lists';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Menu />
      <EMat />
      {/* <Reminder backgroundColor={'orange'} count={0} name={'shit'} /> */}
      {/* <List /> */}
      <Scheduler events={EVENTS} />
      {/* <Header /> */}

      {/* <Menu /> */}
      {/* 其他内容 */}
    </div>
  );
};

export default Home;

