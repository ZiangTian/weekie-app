// taskStorage.ts
import moment from 'moment'; // 正确导入moment库
import {TaskT} from './MainTask'; // Make sure this path points to your type definition file
import axios from 'axios';
// taskStorage.ts
import { openDB, DBSchema, IDBPDatabase } from 'idb';


interface TaskDB extends DBSchema {
  tasks: {
    key: string;
    value: TaskT;
  };
}

let db: IDBPDatabase<TaskDB>;

const initDB = async () => {
  db = await openDB<TaskDB>('taskDB', 1, {
    upgrade(db) {
      db.createObjectStore('tasks', { keyPath: 'taskID' });
    },
  });
};

// export const getTasks = async (): Promise<TaskT[]> => {
//   if (!db) await initDB();
//   return (await db.getAll('tasks')) || [];
// }; 

export const getTasks = async (): Promise<TaskT[]> => {
  // const token = localStorage.getItem('jwt'); // 从LocalStorage获取存储的JWT
  const token=localStorage.getItem("token");
  try {
    // 发起带有认证头部的GET请求
    const response = await axios.get('http://47.115.213.200/api/schedule', {
      headers: {
        Authorization: token // 使用Token进行认证
      }
    });

    // 将响应数据映射到TaskT类型
    const tasks = response.data.data.map((task: any) => ({
      taskID: task.taskID,
      title: task.title,
       startTime: moment(task.startTime), // 将字符串转换为moment对象
       endTime: moment(task.endTime),
       deadLine: moment(task.deadLine),
      importance: task.importance,
      urgency: task.urgency,
      tag: task.tag,
      desc: task.desc
    }));

    return tasks; // 返回转换后的任务列表
  } catch (error) {
    // 错误处理，可以根据需要进行调整
    console.error('Error fetching tasks:', error);
    return []; // 发生错误时返回空数组
  }
};
 
  

export const addTask = async (task: TaskT): Promise<void> => {
  const token=localStorage.getItem("token");
    // 发起带有认证头部的POST请求
    await axios.post('http://47.115.213.200/api/schedule', task, {
      headers: {
        Authorization: token // 使用 Token进行认证
      }
    });
    console.log('Task added successfully');  
};

export const updateTask = async (task: TaskT): Promise<void> => {
  const token=localStorage.getItem("token");

  // 发起带有认证头部的POST请求
  await axios.put('http://47.115.213.200/api/schedule', task, {
    headers: {
      Authorization: token // 使用 Token进行认证
    }
  });
  console.log('Task added successfully');  
};


export const removeTask = async (taskID: string): Promise<void> => {
  const token=localStorage.getItem("token");

    // 发起带有认证头部的POST请求
    try {
      // 发起带有认证头部的DELETE请求，将taskID包含在URL中
      await axios.delete(`http://47.115.213.200/api/schedule/?uuid=${taskID}`, {
        headers: {
          Authorization: token // 使用Bearer Token进行认证
        }
      });
      console.log('Task removed successfully');
    } catch (error) {
      // 错误处理
      console.error('Error removing task:', error);
      throw error
    }
};
