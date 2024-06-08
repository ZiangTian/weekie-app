import React, { useState,useRef,MutableRefObject,useMemo, useEffect } from 'react';
import './EMatStyles.css';
import {Button, DatePicker, Drawer, Input, message } from 'antd';
import GradientComponent from './GradientComponent';
import Lists from './Lists';
import { FormInstance } from 'antd/es/form';
import withModal from './useModal';
import UserForm from './UserForm';
import './MaintaskStyles.css';
import { PlusIcon } from './Icon/Icon';
import './taskItemStyles.css'
import moment from "moment";
import {TaskT} from './MainTask'
import { getTasks, addTask, updateTask, removeTask } from './TaskStorage';
import { images } from '../assets/images';

interface EMatProps {
  taskList: TaskT[];
  filterTasksByGradient: (importance: boolean, urgency: boolean) => void;
  filterTasksByTag: (tag: string) => void;
}

const EisenhowerMatrix: React.FC<EMatProps> = ({ taskList, filterTasksByGradient, filterTasksByTag }) => {

  const [visible, setVisible] = useState(false);
  const [tasks,setTasks]=useState<TaskT[]>([])
  const open = () => {
    console.log("open called")
    setVisible(true);
  };
  const close = () => {
    const newName = false;
    setVisible(newName);
  };

  useEffect(() => {
    setVisible(visible)
  }, [visible]);

  useEffect(() => {
    const loadTasks = async () => {
      const loadedTasks = await getTasks();
      setTasks(loadedTasks);
    };

    loadTasks();
  }, []);

  const countTasks = (importance: boolean, urgency: boolean) => {
    // const imp = importance ? 1 : 0
    // const urg = urgency ? 1 : 0
    console.log("tasks: ",tasks)
    console.log("counts: ",tasks.filter(task => task.Importance === importance && task.Urgency === urgency).length)
    return tasks.filter(task => task.Importance === importance && task.Urgency === urgency).length;
  };


  const submit = (ref: MutableRefObject<FormInstance>) => {
    ref.current.submit();
  };
  
  const afterSubmit = async (values:any) => {
    const taskID =Date.now().toString()
    const newTask: TaskT = {
      title: values.title,
      startTime: values.startTime.toISOString(), // convert to string
      endTime: values.endTime.toISOString(),     // convert to string
      deadLine: values.deadLine.toISOString(),   // convert to string
      Importance: values.Importance,
      Urgency: values.Urgency,
      tag: values.tag,
      desc: values.desc,
      taskID: taskID,
    };
    message.success('Successfully Added')
    console.log(
      // ...tasks, newTask,
      // values
      newTask
  
    )
    await addTask(newTask); // Add task to IndexedDB
    setTasks([...tasks, newTask]);
    close();
    window.location.reload(); // Refresh the page
  };
  
  const UserFormModal = withModal({ title: 'AddTask' }, { afterSubmit })(React.forwardRef(UserForm));
  // const EnhancedUserForm = withModal({ title: 'AddTask' }, { afterSubmit })(UserForm);


  return (
    <div className="outer-container">
      <div className="eisenhower-matrix">
        <div className="impo">Important</div>
        <div className="title">Eisenhower Matrix</div>

        <div className="horizontal-line"></div>
        <div className="vertical-line"></div>

        <div className="central" >
          <div onClick={open}>
            <img 
              src={images['iconAdd']} 
              alt="iconAdd"
            />
          </div>
          <UserFormModal open={visible} onCancel = {()=>{setVisible(false)}} onOk={submit} /> 
        </div>
   
        <div className="quadrant top-left-quadrant" onClick={() => filterTasksByGradient(true, true)}>
          <GradientComponent number={countTasks(true, true)} />


          <div className="text">Urgent</div>
        </div>
  

        <div className="quadrant top-right-quadrant" onClick={() => filterTasksByGradient(true, false)}>
            <GradientComponent number={countTasks(true, false)}  />
        
        </div>

        <div className="quadrant bottom-left-quadrant" onClick={() => filterTasksByGradient(false, true)}>
          <GradientComponent number={countTasks(false, true)} />
        
        </div>

        <div className="quadrant bottom-right-quadrant" onClick={() => filterTasksByGradient(false, false)}>
            <GradientComponent number={countTasks(false, false)} />
        
        </div>

        <div className="matList">
          <Lists onSelectTag={filterTasksByTag}/>
        </div>

        
      </div>
    </div>
  );
};

export default EisenhowerMatrix;

