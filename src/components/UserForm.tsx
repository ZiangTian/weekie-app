import { Form, Input, Select,DatePicker } from 'antd';
import type { FormInstance } from 'antd/es/form';
import React from 'react';
type PropsType = React.PropsWithChildren<{
  afterSubmit?: (values: any, form: FormInstance<any>) => void;
}>;
const UserForm = (props: PropsType, ref?: React.ForwardedRef<FormInstance>) => {
  const [form] = Form.useForm();
  // 提交后获取表单数据，请求接口，重置表单并关闭
  const onSubmit = (values: any) => {
    console.log(values);
    //await  fetch ...
    form.resetFields();
    props.afterSubmit?.(values, form);
  };
  
  return (
    <div className="form">
      <Form
        onFinish={onSubmit}
        ref={ref}
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="title"
          name="title"
          rules={[{ required: true, message: 'Please input Tasktitle!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="startTime" label="startTime" 
          rules={[{ required: true, message: 'Please Choose startTime' }]}
        >
         <DatePicker showTime format="YYYY-MM-DD HH:mm" placeholder='choose startTime'/>
       </Form.Item>
      
       <Form.Item name="endTime" label="endTime" 
          rules={[{ required: true, message: 'Please Choose EndTime' }]}
        >
         <DatePicker showTime format="YYYY-MM-DD HH:mm" placeholder='choose endTime' />
       </Form.Item>

       <Form.Item name="deadLine" label="deadLine" 
          rules={[{ required: true, message: 'Please Choose DeadLine' }]}
        >
         <DatePicker showTime format="YYYY-MM-DD HH:mm" placeholder='choose deadLine' />
       </Form.Item>
        
        <Form.Item
          label="Importance"
          name="Importance"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value={false}>Not Important</Select.Option>
            <Select.Option value={true}>Important</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Urgency"
          name="Urgency"
          rules={[{ required: true}]}
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
      </Form>
    </div>
  );
};
export default UserForm;

