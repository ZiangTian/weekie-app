import React, { useState, useRef, MutableRefObject, useMemo, useEffect } from 'react';
import './EMatStyles.css';
import { Button, DatePicker, Drawer, Input, message } from 'antd';
import GradientComponent from './GradientComponent';
import Lists from './Lists';
import { FormInstance } from 'antd/es/form';
import withModal from './useModal';
import UserForm from './UserForm';
import './MaintaskStyles.css';
import { PlusIcon } from './Icon/Icon';
import './taskItemStyles.css';
import moment from "moment";
import { TaskT } from './MainTask';
import { getTasks, addTask, updateTask, removeTask } from './TaskStorage';
import { images } from '../assets/images';
import TaskDetail from './TaskDetail';
import axios from 'axios';

interface EMatProps {
  taskList: TaskT[];
  filterTasksByGradient: (importance: boolean, urgency: boolean) => void;
  filterTasksByTag: (tag: string) => void;
}

const EisenhowerMatrix: React.FC<EMatProps> = ({ taskList, filterTasksByGradient, filterTasksByTag }) => {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState<TaskT[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [fetchedTask, setFetchedTask] = useState<TaskT | null>(null);
  const [loading, setLoading] = useState(false); // 加载状态

  const open = () => {
    console.log("open called");
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  useEffect(() => {
    const loadTasks = async () => {
      const loadedTasks = await getTasks();
      setTasks(loadedTasks);
    };

    loadTasks();
  }, []);

  const countTasks = (importance: boolean, urgency: boolean) => {
    return tasks.filter(task => task.Importance === importance && task.Urgency === urgency).length;
  };

  const submit = (ref: MutableRefObject<FormInstance>) => {
    ref.current.submit();
  };

  const afterSubmit = async (values: any) => {
    const taskID = Date.now().toString();
    const newTask: TaskT = {
      title: values.title,
      startTime: values.startTime.toISOString(),
      endTime: values.endTime.toISOString(),
      deadLine: values.deadLine.toISOString(),
      Importance: values.Importance,
      Urgency: values.Urgency,
      tag: values.tag,
      desc: values.desc,
      taskID: taskID,
    };
    message.success('Successfully Added');
    await addTask(newTask);
    setTasks([...tasks, newTask]);
    close();
    window.location.reload(); // Refresh the page
  };

  const UserFormModal = withModal({ title: 'AddTask' }, { afterSubmit })(React.forwardRef(UserForm));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const handleButtonClick = async () => {
    console.log("Input Value:", inputValue);
    const currentInputValue = inputValue;
    // Fetch data from the backend
    setLoading(true);
    setInputValue('waiting......'); // 显示等待状态

    // const response = await fetch('/your-backend-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ input: inputValue }),
    // });

    try {
      const response = await axios.post('http://your-backend-url/api/process', 
        { text: currentInputValue },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const data =  response.data;
      //根据nlpTask创建任务
          // const data = await response.json();
      const taskID_ = data.taskID;

      // go search in the db

      /*
      Home中读数据库的代码
      用taskID_去数据库中查找对应的task
      得到后命名为newTask

      const newTask = tasks.find(task => task.taskID === taskID_);
      const newTask = tasks.filter(task => task.taskID === taskID_)[0]; 
      */

      // const newTask: TaskT = {
      //   taskID: data.taskID,
      //   title: data.title,
      //   startTime: moment(data.startTime),
      //   endTime: moment(data.endTime),
      //   deadLine: moment(data.deadLine),
      //   Importance: data.Importance,
      //   Urgency: data.Urgency,
      //   tag: data.tag,
      //   desc: data.desc,
      // };
      setFetchedTask(newTask);

        setLoading(false);
        setInputValue(''); // 重置输入框
        message.success('Task created successfully!');
      }
      catch (error) {
        setLoading(false);
        setInputValue(currentInputValue); // 恢复输入值
        message.error('Failed to create task!');
        console.error('Error:', error);
      }

  };

  return (
    <div className="outer-container">
      <div className="eisenhower-matrix">
        <div className="impo">Important</div>
        <div className="title">Eisenhower Matrix</div>

        <div className="horizontal-line"></div>
        <div className="vertical-line"></div>

        <div className="central">
          <div onClick={open}>
            <img src={images['iconAdd']} alt="iconAdd" />
          </div>
          <UserFormModal open={visible} onCancel={() => setVisible(false)} onOk={submit} />
        </div>

        <div className="quadrant top-left-quadrant" onClick={() => filterTasksByGradient(true, true)}>
          <GradientComponent number={countTasks(true, true)} />
          <div className="text">Urgent</div>
        </div>

        <div className="quadrant top-right-quadrant" onClick={() => filterTasksByGradient(true, false)}>
          <GradientComponent number={countTasks(true, false)} />
        </div>

        <div className="quadrant bottom-left-quadrant" onClick={() => filterTasksByGradient(false, true)}>
          <GradientComponent number={countTasks(false, true)} />
        </div>

        <div className="quadrant bottom-right-quadrant" onClick={() => filterTasksByGradient(false, false)}>
          <GradientComponent number={countTasks(false, false)} />
        </div>

        <div className="input-container">
          <input value={inputValue} onChange={handleInputChange} placeholder="Enter text" />
          <button onClick={handleButtonClick}></button>
        </div>

        <div className="matList">
          <Lists onSelectTag={filterTasksByTag} />
        </div>

        {fetchedTask && (
          <TaskDetail
            task={fetchedTask}
            onClose={() => setFetchedTask(null)}
            onSubmit={(modifiedTask) => {
              setTasks([...tasks.filter(task => task.taskID !== modifiedTask.taskID), modifiedTask]);
              message.success('Successfully Modified');
            }}
          />
        )}

      </div>
    </div>
  );
};

export default EisenhowerMatrix;
