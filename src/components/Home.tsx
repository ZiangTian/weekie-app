import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu'; 
import EMat from '../components/EMat';
import Task from  '../components/MainTask'
import {TaskT} from './MainTask'
import './HomeStyles.css';
import { Scheduler } from '@aldabil/react-scheduler';
import Reminder from '../components/Reminder';
import List from '../components/Lists';
import { getTasks } from './TaskStorage';
import schedulerIcon from '../assets/schedule.png';
import listIcon from '../assets/list.png';
import moment from 'moment'; // 正确导入moment库
import { ProcessedEvent } from '@aldabil/react-scheduler/types';
import { TextField, Button, DialogActions } from "@mui/material";
import { set } from 'date-fns';



const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskT[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TaskT[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<ProcessedEvent[]>([]);
  const [events, setEvents] = useState<ProcessedEvent[]>([]);
  const [isTaskView, setIsTaskView] = useState(true); // 默认为任务列表视图

  useEffect(() => {
    const loadTasks = async () => {
      const loadedTasks = await getTasks();
      const eventFormat = loadedTasks.map(task => ({
        event_id: task.taskID,
        title: task.title,
        start: task.startTime.toDate(),  // 确保 .toDate() 被正确调用
        end: task.endTime.toDate(),      // 确保 .toDate() 被正确调用
        disabled: false,  // Assuming `editable` defines if it can be disabled
        color: "#50b500", // Default color if not specified
        textColor: "white", // Assuming a default text color
        editable:false,
        deletable: false,
        draggable:false,
        allDay: false, // Set based on actual data
      }));
      setTasks(loadedTasks);
      setFilteredTasks(loadedTasks);
      setEvents(eventFormat);
      setFilteredEvents(eventFormat);
    };

    loadTasks();
  }, []);


  const filterTasksByGradient = (importance: boolean, urgency: boolean) => {
    const filtered = tasks.filter(task => task.importance === importance && task.urgency === urgency);
    // get the id of the tasks
    const taskIDs = filtered.map(task => task.taskID);
    // get filtered_events based on the taskIDs
    const filtered_events = events.filter(event => taskIDs.includes(event.event_id.toString()));
    setFilteredTasks(filtered);
    setFilteredEvents(filtered_events);    
  };

  const filterTasksByTag = (tag: string) => {
    const filtered = tasks.filter(task => task.tag === tag);
    const taskIDs = filtered.map(task => task.taskID);
    const filtered_events = events.filter(event => taskIDs.includes(event.event_id.toString()));
    setFilteredTasks(filtered);
    setFilteredEvents(filtered_events);
  };

  const resetTaskFilter = () => {
    setFilteredTasks(tasks);
    setFilteredEvents(events);
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
           week={{ 
           weekDays: [0, 1, 2, 3, 4, 5, 6],
           weekStartOn: 6,
           startHour: 0,
           endHour: 24,
           step: 120,
           cellRenderer: ({ height, start, onClick, ...props }) => {
          // Fake some condition up
              const hour = start.getHours();
              const disabled = hour === 25;
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
                    console.log("disabled");
                      //  return alert("Opss");
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
                // const task = event as unknown as TaskT;
                // use event id to get the task, and get the task details
                const task = tasks.filter(task => task.taskID === event.event_id.toString())[0];
                console.log("corresponding task to the event", task);
                return (
                <div>
                <p><strong>Title:</strong> {task.title}</p>
                <p><strong>Tag:</strong> {task.tag}</p>
                <p><strong>Start Time:</strong> {moment(task.startTime).format("YYYY-MM-DD HH:mm")}</p>
                <p><strong>End Time:</strong> {moment(task.endTime).format("YYYY-MM-DD HH:mm")}</p>
                <p><strong>Deadline:</strong> {moment(task.deadLine).format("YYYY-MM-DD HH:mm")}</p>
                <p><strong>Importance:</strong> {task.importance ? "Important" : "Not Important"}</p>
                <p><strong>Urgency:</strong> {task.urgency ? "Urgent" : "Not Urgent"}</p>
                <p><strong>Description:</strong> {task.desc || "No description"}</p>
                </div>
            );
           }}
           month={null}
           day={null}
           events={filteredEvents}
            /> 
        </div>
      )}
    </div>
  );
};

export default Home;

