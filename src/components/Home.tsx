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

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu'; 
import EMat from '../components/EMat';
import Task from  '../components/MainTask'
import {TaskT} from './MainTask'

import './HomeStyles.css';
import { Scheduler } from '@aldabil/react-scheduler';
import type { SchedulerRef } from '@aldabil/react-scheduler/types';
import { EVENTS } from '../events';
import Reminder from '../components/Reminder';
import List from '../components/Lists';
import { getTasks } from './TaskStorage';

const Home: React.FC = () => {

  const [tasks, setTasks] = useState<TaskT[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TaskT[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const loadedTasks = await getTasks();
      setTasks(loadedTasks);
      setFilteredTasks(loadedTasks);
    };

    loadTasks();
  }, []);

  const filterTasksByGradient = (importance: boolean, urgency: boolean) => {
    const filtered = tasks.filter(task => task.Importance === importance && task.Urgency === urgency);
    setFilteredTasks(filtered);
  };

  const filterTasksByTag = (tag: string) => {
    const filtered = tasks.filter(task => task.tag === tag);
    setFilteredTasks(filtered);
  };
  const resetTaskFilter = () => {
    setFilteredTasks(tasks);
  };

  return (
    <div className="home-page">
      <div className="header">
        <Header title='Schedule' />
      </div>
      
      <div className="menu">
        <Menu resetTaskFilter={resetTaskFilter}/>
      </div>
      
      <div className = "emat">
        <EMat taskList={tasks} filterTasksByGradient={filterTasksByGradient} filterTasksByTag={filterTasksByTag} />
      
      </div>
      
      <div className='Task'>
      <Task taskList={filteredTasks} />
     
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

