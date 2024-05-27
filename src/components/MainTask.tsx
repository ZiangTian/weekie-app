import React from 'react';
import './MaintaskStyles.css';
import TaskItem from '../components/taskItem'
import {Button, DatePicker, Input } from 'antd';
import GradientComponent from './GradientComponent';
import Lists from './Lists';
import { PlusIcon } from './Icon/Icon';
import TestPage from './AddTaskPage';

const Task = () => {
  const onChange=(value:any,dateString:string | string[])=>{
    console.log('Selected Time: ',value);
    console.log('formatted Selected Time',dateString);
  }
  const onOk=(value:any)=>{
    console.log('onOk: ',value)
  }
  const handleFocus=()=>{

  }
  return (
    <div className="outer-container">
        <div className="Task_background"></div>
        <div className="task_title">TaskList</div>
        <TestPage />
        {/* <div className='add-task-btn'>
        
            <PlusIcon />
            <input placeholder='Add Task' onFocus={handleFocus}></input>
            <div className='add-task-text' >Add Task</div>
     
        </div> */}
        {/* <DatePicker showTime onChange={onChange} onOk={onOk} placeholder='Select DeadLine Time'></DatePicker> */}
        {/* <TestPage></TestPage> */}
        <div className='TaskItem'>
           <div className='TaskItem-container'>
           <TaskItem event_id='1' title='test'
    startTime='2024-02-12'
    endTime='2024-02-12'
    deadline='2024-02-12'
    tag="csapp"
    desc='quickly'></TaskItem>
    <TaskItem event_id='1' title='test'
    startTime='2024-02-12'
    endTime='2024-02-12'
    deadline='2024-02-12'
    tag="csapp"
    desc='quickly'></TaskItem>
    <TaskItem event_id='1' title='test'
    startTime='2024-02-12'
    endTime='2024-02-12'
    deadline='2024-02-12'
    tag="csapp"
    desc='quickly'></TaskItem>
    <TaskItem event_id='1' title='test'
    startTime='2024-02-12'
    endTime='2024-02-12'
    deadline='2024-02-12'
    tag="csapp"
    desc='quickly'></TaskItem>
    <TaskItem event_id='1' title='test'
    startTime='2024-02-12'
    endTime='2024-02-12'
    deadline='2024-02-12'
    tag="csapp"
    desc='quickly'></TaskItem>
  

      </div>
      </div>    
      </div>

  );
};

export default Task;
