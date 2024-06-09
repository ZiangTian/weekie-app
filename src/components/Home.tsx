import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu'; 
import EMat from '../components/EMat';
import Task from  '../components/MainTask'
import {TaskT} from './MainTask'

import './HomeStyles.css';
import { Scheduler } from '@aldabil/react-scheduler';
// import { EVENTS } from '../events';
import Reminder from '../components/Reminder';
import List from '../components/Lists';
import { getTasks } from './TaskStorage';
import schedulerIcon from '../assets/schedule.png';
import listIcon from '../assets/list.png';


import { TextField, Button, DialogActions } from "@mui/material";
// import type {
//   ProcessedEvent,
//   SchedulerHelpers
// } from "@aldabil/react-scheduler/types";
import moment from "moment";

// interface CustomEditorProps {
//   scheduler: SchedulerHelpers;
// }



const Home: React.FC = () => {

  const [tasks, setTasks] = useState<TaskT[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TaskT[]>([]);
  const [isTaskView, setIsTaskView] = useState(true); // 默认为任务列表视图

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
      
      <div className="emat">
        <EMat taskList={tasks} filterTasksByGradient={filterTasksByGradient} filterTasksByTag={filterTasksByTag} />
      </div>
      

      <div className='switchview'>
        <button onClick={() => setIsTaskView(!isTaskView)}>
          
          <img src={isTaskView ? schedulerIcon : listIcon} alt={isTaskView ? '切换到日程视图' : '切换到任务视图'} />
        </button>
      </div>
      
      {isTaskView ? (
        <div className='Task'>
          <Task taskList={filteredTasks} />
        </div>
      ) : (
        <div className='scheduler'>
      <Scheduler
      // events={}
      day = {null}
      month = {null}
      week={{ 
        weekDays: [0, 1, 2, 3, 4, 5, 6],
        weekStartOn: 6,
        startHour: 0,
        endHour: 24,
        step: 120,
        cellRenderer: ({ height, start, onClick, ...props }) => {
          // Fake some condition up
          const hour = start.getHours();
          const disabled = hour === 14;
          const restProps = disabled ? {} : props;
          return (
            <Button
              style={{
                height: "100%",
                background: disabled ? "#eee" : "transparent",
                cursor: disabled ? "not-allowed" : "pointer"
              }}
              onClick={() => {
                if (disabled) {
                  return alert("Opss");
                }
                // onClick();
              }}
              disableRipple={disabled}
              // disabled={disabled}
              {...restProps}
            ></Button>
          );
        }
      }}
      viewerExtraComponent={(fields, event) => {
        const task = event as unknown as TaskT;
        return (
          <div>
            <p><strong>Title:</strong> {task.title}</p>
            <p><strong>Tag:</strong> {task.tag}</p>
            <p><strong>Start Time:</strong> {moment(task.startTime).format("YYYY-MM-DD HH:mm")}</p>
            <p><strong>End Time:</strong> {moment(task.endTime).format("YYYY-MM-DD HH:mm")}</p>
            <p><strong>Deadline:</strong> {moment(task.deadLine).format("YYYY-MM-DD HH:mm")}</p>
            <p><strong>Importance:</strong> {task.Importance ? "Important" : "Not Important"}</p>
            <p><strong>Urgency:</strong> {task.Urgency ? "Urgent" : "Not Urgent"}</p>
            <p><strong>Description:</strong> {task.desc || "No description"}</p>
          </div>
        );
      }}
      />
        </div>
      )}
    </div>
  );
};

export default Home;
