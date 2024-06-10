// export const EVENTS = [
//   {
//     event_id: 1,
//     title: "Event 1",
//     start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
//     end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
//     deadline: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
//     importance:1,
//     Urgent:1,
//     disabled: true,
//     draggable: false,
//     admin_id: [1, 2, 3, 4],
//   },
//   {
//     event_id: 2,
//     title: "Event 2",
//     start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
//     end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
//     deadline: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
//     admin_id: 2,
//     importance:1,
//     Urgent:1,
//     draggable: false,
//     color: "#50b500",
//   },
//   {
//     event_id: 3,
//     title: "Event 3",
//     start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
//     end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
//     deadline: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
//     importance:1,
//     Urgent:1,
//     admin_id: 1,
//     editable: false,
//     deletable: false,
//     draggable: false,
//   },
//   {
//     event_id: 4,
//     title: "Event 4",
//     start: new Date(
//       new Date(new Date(new Date().setHours(9)).setMinutes(30)).setDate(
//         new Date().getDate() - 2
//       )
//     ),
//     end: new Date(
//       new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
//         new Date().getDate() - 2
//       )
//     ),
//     deadline: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
//     importance:1,
//     Urgent:1,
//     admin_id: 2,
//     color: "#900000",
//     draggable: false,
//   },
//   {
//     event_id: 5,
//     title: "Event 5",
//     start: new Date(
//       new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
//         new Date().getDate() - 2
//       )
//     ),
//     end: new Date(
//       new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
//         new Date().getDate() - 2
//       )
//     ),
//     deadline: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
//     importance:1,
//     Urgent:1,
//     admin_id: 2,
//     editable: true,
//     draggable: false,
//   },
//   {
//     event_id: 6,
//     title: "Event 6",
//     start: new Date(
//       new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
//         new Date().getDate() - 4
//       )
//     ),
//     end: new Date(new Date(new Date().setHours(14)).setMinutes(0)),
//     deadline: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
//     importance:1,
//     Urgent:1,
//     admin_id: 2,
//     draggable: false,
//   },
// ];
import { ProcessedEvent } from '@aldabil/react-scheduler/types';
import axios from 'axios';
import moment from 'moment'; // 正确导入moment库


export const fetchEvents = async (): Promise<ProcessedEvent[]> => {
  // const token = localStorage.getItem('jwt'); // 从LocalStorage获取存储的JWT
  const token=localStorage.getItem("token");
    // 发起带有认证头部的GET请求
    const response = await axios.get('http://47.115.213.200/api/schedule', {
      headers: {
        Authorization: token // 使用Token进行认证
      }
    });

    // 将响应数据映射到TaskT类型
    const tasks = response.data.data.map((task: any) => ({
      event_id: task.taskID,
      title: task.title,
      // start: (task.startTime), 
      // end: (task.endTime),
      // deadline:(task.deadLine),
      importance: task.importance,
      Urgent: task.urgency,
      tag: task.tag,
      
    }));

    return tasks; // 返回转换后的任务列表
  
};