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



const EisenhowerMatrix = () => {

  const [visible, setVisible] = useState(false);
  const [tasks,setTasks]=useState<TaskT[]>([])
  const open = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
    console.log('close')
  };

  useEffect(() => {
    const loadTasks = async () => {
      const loadedTasks = await getTasks();
      setTasks(loadedTasks);
    };

    loadTasks();
  }, []);

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
   
        <div className="quadrant top-left-quadrant" >
          <GradientComponent number={9} onClick={open} />
           <div>
           <UserFormModal open={visible} onCancel={close} onOk={submit} initialImportance={true} initialUrgency={false}/>
           </div>

          <div className="text">Urgent</div>
        </div>
  

        <div className="quadrant top-right-quadrant">
            <GradientComponent number={8} onClick={open} />
            <div>
          <UserFormModal open={visible} onCancel={close} onOk={submit} initialImportance={true} initialUrgency={true}/>
           </div>
        
        </div>

        <div className="quadrant bottom-left-quadrant">
          <GradientComponent number={10} onClick={open}/>
          <div>
          <UserFormModal open={visible} onCancel={close} onOk={submit} initialImportance={false} initialUrgency={false}/>
          </div> 
        
        </div>

        <div className="quadrant bottom-right-quadrant">
            <GradientComponent number={10} onClick={open}/>
            <div>
          <UserFormModal open={visible} onCancel={close} onOk={submit} initialImportance={false} initialUrgency={true}/>
           </div>
        
        </div>

        <div className="matList">
          <Lists/>
        </div>

        
      </div>
    </div>
  );
};

export default EisenhowerMatrix;

