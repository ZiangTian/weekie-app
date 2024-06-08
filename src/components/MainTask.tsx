import React, { useState,useRef,MutableRefObject,useMemo, useEffect } from 'react';
import './MaintaskStyles.css';
import TaskItem from '../components/taskItem'
import {Button, DatePicker, Drawer, Input, message } from 'antd';
import GradientComponent from './GradientComponent';
import { FormInstance } from 'antd/es/form';
import withModal from './useModal';
import UserForm from './UserForm';
import './MaintaskStyles.css';
import { PlusIcon } from './Icon/Icon';
import './taskItemStyles.css'
import moment from "moment";
import TaskDetail from './TaskDetail';
import apiConfig from '../api/config';
import { addTask as dbAddTask, getTasks, removeTask as dbRemoveTask, updateTask as dbUpdateTask } from './TaskStorage';

export type TaskT={
  taskID:string
  title:string
  startTime: moment.Moment
  endTime: moment.Moment
  deadLine: moment.Moment
  Importance:boolean
  Urgency:boolean
  tag:string
  desc?: string;
}

interface MainTaskProps {
  taskList: TaskT[];
}

const Task: React.FC<MainTaskProps> = ({ taskList }) => {
  
  const detailRef: MutableRefObject<any> = useRef()

  // const [visible, setVisible] = useState(false);
  const [tasks,setTasks]=useState<TaskT[]>([])
  const [activeTaskKey,setActiveTaskKey] = useState('')
  const activeTask = useMemo(()=>{
    return tasks.find(i =>i.taskID===activeTaskKey)
  },[tasks,activeTaskKey])

  useEffect(() => {
    const loadTasks = async () => {
      const loadedTasks = await getTasks();
      console.log(loadedTasks)
      console.log(tasks)
      setTasks(loadedTasks.map(
        // set the string to moment object
        i => ({
          ...i,
          startTime: moment(i.startTime),
          endTime: moment(i.endTime),
          deadLine: moment(i.deadLine),
        }
      )));
      
      
    };

    loadTasks();
  }, []);
 

    // const open = () => {
    //   // setVisible(true);
    // };
    // //关闭弹窗
    // const close = () => {
    //   // setVisible(false);
    // };
    // //点击确定提交表单
    // const submit = (ref: MutableRefObject<FormInstance>) => {
    //   ref.current.submit();

    // };
    // const afterSubmit = (values:any) => {
    //   const taskID =Date.now().toString()
    //   const newTask: TaskT = {
    //     title: values.title,
    //     startTime: moment(values.startTime.toDate()),
    //     endTime: moment(values.endTime.toDate()),
    //     deadLine:moment(values.deadLine.toDate()),
    //     Importance: values.Importance,
    //     Urgency: values.Urgency,
    //     tag: values.tag,
    //     desc: values.desc,
    //     taskID:taskID,

    //   };
    //   message.success('Successfully Added')
    //   console.log(
    //     ...tasks, newTask,
    //     // values

    //   )
    //   setTasks([...tasks, newTask]);
    //   close();
    // };
  
    
    // const UserFormModal = withModal({ title: 'AddTask' }, { afterSubmit })(React.forwardRef(UserForm));
  
    const handleFinish =(taskID:string)=>{
      setTasks([...tasks.filter(i=>i.taskID!==taskID)])
      // api(apiConfig.create.url).then(data =>{
      //   console.log(data,'api');
      // }).catch(e=>{
      //   console.log(e);
      // })
    }

    const handleRemove =(taskID:string)=>{
      // remove from the database
      dbRemoveTask(taskID);
      window.location.reload(); // Refresh the page
      // setTasks([...tasks.filter(i=>i.taskID!==taskID)])
    }

    const handleModify=(values:TaskT)=>{
      console.log(values)
      setTasks([...tasks.filter(i=>i.taskID!==activeTaskKey),values])
      message.success('Successfully Modified')
    }
  return (
    <div className="outer-container">
        <div className="Task_background"></div>
        <div className="task_title">TaskList</div>
        {/* <div>
        <div className="add-task-btn" onClick={open}>
            <PlusIcon />
            <div className='add-task-text'>Add Task</div>
        </div>
        <UserFormModal open={visible} onCancel={close} onOk={submit} />
      </div> */}


      {/* {tasks.map((task, index) => (
        <TaskItem
          key={index}
          title={task.title}
          startTime={task.startTime}
          endTime={task.endTime}
          deadLine={task.deadLine}
          Importance={task.Importance}
          Urgency={task.Urgency}
          tag={task.tag}
          desc={task.desc}
          active={activeTaskKey===task.taskID}
          onClick={()=>setActiveTaskKey(task.taskID)}
          onFinish={()=>handleFinish(task.taskID)}
          onRemove={()=>handleRemove(task.taskID)}
        />
      ))} */}

     {taskList.map((task, index) => (
        <TaskItem
          key={index}
          title={task.title}
          startTime={task.startTime}
          endTime={task.endTime}
          deadLine={task.deadLine}
          Importance={task.Importance}
          Urgency={task.Urgency}
          tag={task.tag}
          desc={task.desc}
          active={activeTaskKey===task.taskID}
          onClick={()=>setActiveTaskKey(task.taskID)}
          onFinish={()=>handleFinish(task.taskID)}
          onRemove={()=>handleRemove(task.taskID)}
        />
      ))}
      <TaskDetail task={activeTask}
      onClose={()=>{
        setActiveTaskKey('');
      }}
      onSubmit={handleModify}
      
      />
      </div>
      
  
  );
};

export default Task;
