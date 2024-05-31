import './TaskDetailStyle.css'
import {Drawer, Input,Form, Button, Select,DatePicker,FormInstance} from 'antd'
import {TaskT} from './MainTask'
import { useState,useMemo,useRef, useEffect } from 'react'
import moment, { Moment } from 'moment'

interface IProps{
      task?:TaskT
      onClose:() => void
      onSubmit:(values:TaskT) => void
}
export default function TaskDetail(props:IProps){

    const {task,onClose,onSubmit} =props;
    const [title, setTitle]=useState('');
    const [form] = Form.useForm();

    useEffect(() => {
      if (task) {
        form.setFieldsValue({
          ...task,
          startTime: moment(task.startTime),
          endTime: moment(task.endTime),
          deadLine: moment(task.deadLine),
        });
      } else {
        form.resetFields();
      }
    }, [task, form]);
   
    const handleTitleChange=(e:any)=>{
      setTitle(e.target.value)
    }
    
    const RealTitle=useMemo(()=>{
        return title?title:(task?.title||'')
  
    },[title,task])

    const renderTitle=()=>{
        console.log(task?.title)
        return <Form.Item label="TaskTitle">
            <Input name="title" value={RealTitle}
            onChange={handleTitleChange}
            />
        </Form.Item>
    }

    const handleSubmit=(values:any)=>{
        onSubmit?.({
            title: RealTitle,
            startTime: moment(values.startTime.toDate()) || task?.startTime,
            endTime: moment(values.endTime.toDate()) || task?.endTime,
            deadLine:moment(values.deadLine.toDate()) || task?.deadLine,
            Importance: values.Importance || task?.Importance,
            Urgency: values.Urgency || task?.Urgency,
            tag: values.tag || task?.tag,
            desc: values.desc || task?.desc,
            taskID:task?.taskID||''
        })
          onClose()
          console.log('form',values)
    }

    return (
        <Drawer 
        title={renderTitle()}
        placement="right"
        onClose={()=>
            { 
                onClose()
                setTitle('')
                // form.resetFields();

            }

         } 
         open={task!== undefined}
         closable={false}>
     
        <Form  form={form} onFinish={handleSubmit} initialValues={task} >
          <Form.Item name="startTime" label="startTime" >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" />
         </Form.Item>
       
      
       <Form.Item name="endTime" label="endTime" 
          rules={[{ required: true, message: 'Please Choose EndTime' }]}
        >
         <DatePicker showTime format="YYYY-MM-DD HH:mm" />
       </Form.Item>

       <Form.Item name="deadLine" label="deadLine" 
          rules={[{ required: true, message: 'Please Choose DeadLine' }]}
        >
         <DatePicker showTime format="YYYY-MM-DD HH:mm" />
       </Form.Item>
        
       
       <Form.Item
          label="Importance"
          name="Importance"
          initialValue={task?.Importance}
        //   rules={[{ required: true }]}
        >
          <Select >
            <Select.Option value={0}>Not Important</Select.Option>
            <Select.Option value={1}>Important</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Urgency"
          name="Urgency"
          rules={[{ required: true}]
         
        }
        >
          <Select>
            <Select.Option value={0}>Not Urgent</Select.Option>
            <Select.Option value={1}>Urgent</Select.Option>
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
        <Form.Item wrapperCol={{offset:8,span:16}}>
        <Button type="primary" htmlType="submit">
        submit
        </Button>
        </Form.Item>
       </Form>
       </Drawer>
    )
    
}