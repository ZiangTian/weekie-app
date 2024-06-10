import './TaskDetailStyle.css'
import {Drawer, Input,Form, Button, Select,DatePicker,FormInstance} from 'antd'
import {TaskT} from './MainTask'
import { useState,useMemo,useRef, useEffect } from 'react'
import moment, { Moment } from 'moment'
import { getTasks, addTask, updateTask, removeTask } from './TaskStorage';


interface IProps{
      task?:TaskT
      onClose:() => void
      onSubmit:(values:TaskT) => void
}

export default function TaskDetail(props: IProps) {
  const { task, onClose, onSubmit } = props;
  const [title, setTitle] = useState('');
  const [form] = Form.useForm();

  useEffect(() => {
    if (task) {
      console.log("task passed to taskdetail ", task);
      form.setFieldsValue({
        ...task,
        startTime: task.startTime,
        endTime: task.endTime,
        deadLine: task.deadLine,
      });
    } else {
      form.resetFields();
    }
  }, [task, form]);

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const RealTitle = useMemo(() => {
    return title ? title : (task?.title || '');
  }, [title, task]);

  const renderTitle = () => {
    console.log(task?.title);
    return (
      <Form.Item label="TaskTitle">
        <Input name="title" value={RealTitle} onChange={handleTitleChange} />
      </Form.Item>
    );
  };

  const handleSubmit = async (values: any) => {
    console.log('values', values);
    const updatedTask: TaskT = {
      title: RealTitle,
      startTime: moment(values.startTime) ,
      endTime: moment(values.endTime) ,
      deadLine: moment(values.deadLine),
      importance: values.importance || task?.importance,
      urgency: values.urgency || task?.urgency,
      tag: values.tag || task?.tag,
      desc: values.desc || task?.desc,
      taskID: task?.taskID || '',
    };
    onSubmit?.(updatedTask);
    try {
     
      await updateTask({
        ...updatedTask,
        startTime: values.startTime.toISOString(),
        endTime: values.endTime.toISOString(),
        deadLine:values.deadLine.toISOString(),
      });

      window.location.reload();
    } catch (error) {
      console.error('Update task failed:', error);
    }

    onClose();
    console.log('form', values);
  };

  const validateEndTime = (_: any, value: any) => {
    const startTime = form.getFieldValue('startTime')?moment(form.getFieldValue('startTime').toISOString()):null
    const endTime = form.getFieldValue('endTime')?moment(form.getFieldValue('endTime').toISOString()):null
    if (!startTime || !endTime) {
      return Promise.resolve();
    }

    if (moment(startTime).isAfter(endTime)) {
      return Promise.reject(new Error('Start time must be before end time'));
    }
    return Promise.resolve();
  };

  const validateDDLTime = (_: any, value: any) => {
    const endTime = form.getFieldValue('endTime')?moment(form.getFieldValue('endTime').toISOString()):null
    const deadLine = form.getFieldValue('deadLine')?moment(form.getFieldValue('deadLine').toISOString()):null
    // console.log(moment(deadLine.toISOString()))

    if (!endTime || !deadLine) {
      return Promise.resolve();
    }

    if (moment(endTime).isAfter(deadLine)) {
      return Promise.reject(new Error('End time must be before deadline'));
    }

    return Promise.resolve();
  };

  return (
    <Drawer
      title={renderTitle()}
      placement="right"
      onClose={() => {
        onClose();
        setTitle('');
      }}
      open={task !== undefined}
      closable={false}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        // initialValues={task}
      >
        <Form.Item
          name="startTime"
          label="startTime"
          rules={[{ required: true, message: 'Please choose start time' }]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" />
        </Form.Item>

        <Form.Item
          name="endTime"
          label="endTime"
          dependencies={['startTime']}
          rules={[
            { required: true, message: 'Please choose end time' },
            { validator: validateEndTime },
          ]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" />
        </Form.Item>

        <Form.Item
          name="deadLine"
          label="deadLine"
          dependencies={['endTime']}
          rules={[
            { required: true, message: 'Please choose deadline' },
            { validator: validateDDLTime },
          ]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" />
        </Form.Item>

        <Form.Item
          label="importance"
          name="importance"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value={false}>Not Important</Select.Option>
            <Select.Option value={true}>Important</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="urgency"
          name="urgency"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value={false}>Not Urgent</Select.Option>
            <Select.Option value={true}>Urgent</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="tag"
          name="tag"
          rules={[{ required: true, message: 'Please input Tag.' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="desc"
          name="desc"
          rules={[{ message: 'details of task' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}