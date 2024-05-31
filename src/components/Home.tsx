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
import Task from  '../components/MainTask'

import './HomeStyles.css';
import { Scheduler } from '@aldabil/react-scheduler';
import type { SchedulerRef } from '@aldabil/react-scheduler/types';
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
      
      <div className='Task'>
      <Task />
     
      </div>
      
      {/* <div className = 'scheduler'>
      <Scheduler 
      fields={
        [{
          name:"deadline",
          type:"date",
          config:{
            label:"deadline",
            md:6,
            type:"datetime"
          }
        },
        
        {
          name:"Importance",
          type:"select",
          options:[
            {id:1,text:"Important",value:1},
            {id:2,text:"Not Important",value:0}
          ],
          config:{label:"Importance",required:true,errMsg:"Plz Select Importance"}

         },
         {
          name:"Urgency",
          type:"select",
          options:[
            {id:1,text:"Urgent",value:1},
            {id:2,text:"Not Urgent",value:0}
          ],
          config:{label:"Urgency",required:true,errMsg:"Plz Select Urgency"}

         },
         {
          name:"tag",
          type:"input",
          default:"Null",
          config:{ label:"tag",multiline:false,rows:1}
        },
        {
          name:"Description",
          type:"input",
          default:"Event description...",
          config:{ label:"Details",multiline:true,rows:4}
        }
        ]
      }
      events={EVENTS} />
      </div> */}
    </div>
  );
};

export default Home;

