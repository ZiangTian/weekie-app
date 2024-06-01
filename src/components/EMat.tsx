import React, { useState,useRef,MutableRefObject,useMemo } from 'react';
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
  const submit = (ref: MutableRefObject<FormInstance>) => {
    ref.current.submit();
  };
  
  const afterSubmit = (values:any) => {
    const taskID =Date.now().toString()
    const newTask: TaskT = {
      title: values.title,
      startTime: moment(values.startTime.toDate()),
      endTime: moment(values.endTime.toDate()),
      deadLine:moment(values.deadLine.toDate()),
      Importance: values.Importance,
      Urgency: values.Urgency,
      tag: values.tag,
      desc: values.desc,
      taskID:taskID,
  
    };
    message.success('Successfully Added')
    console.log(
      ...tasks, newTask,
      // values
  
    )
    setTasks([...tasks, newTask]);
    close();
  };
  const addTask = () => {
    console.log('Task added');
  };
  const UserFormModal = withModal({ title: 'AddTask' }, { afterSubmit })(React.forwardRef(UserForm));

  return (
    <div className="outer-container">
      <div className="eisenhower-matrix">
        <div className="impo">Important</div>
        <div className="title">Eisenhower Matrix</div>

        <div className="horizontal-line"></div>
        <div className="vertical-line"></div>
   
        <div className="quadrant top-left-quadrant" >
          <GradientComponent number={9} addTask={addTask} onClick={open} />
           <div>
          <UserFormModal open={visible} onCancel={close} onOk={submit} />
           </div>

          <div className="text">Urgent</div>
        </div>
  

        <div className="quadrant top-right-quadrant">
            <GradientComponent number={8} addTask={addTask}/>
        </div>

        <div className="quadrant bottom-left-quadrant">
          <GradientComponent number={10} addTask={addTask}/>
        </div>

        <div className="quadrant bottom-right-quadrant">
            <GradientComponent number={10} addTask={() => alert('添加任务！')}/>
        </div>

        <div className="matList">
          <Lists/>
        </div>

        
      </div>
    </div>
  );
};

export default EisenhowerMatrix;

