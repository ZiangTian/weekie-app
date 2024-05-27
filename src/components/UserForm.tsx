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
          label="Tasktitle"
          name="Tasktitle"
          rules={[{ required: true, message: 'Please input Tasktitle!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="StartTime" label="StartTime" 
          rules={[{ required: true, message: 'Please Choose startTime' }]}
        >
         <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
       </Form.Item>
      
       <Form.Item name="EndTime" label="EndTime" 
          rules={[{ required: true, message: 'Please Choose EndTime' }]}
        >
         <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
       </Form.Item>

       <Form.Item name="DeadLine" label="DeadLine" 
          rules={[{ required: true, message: 'Please Choose DeadLine' }]}
        >
         <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
       </Form.Item>
        
        <Form.Item
          label="Importance"
          name="Importance"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value={0}>Not Important</Select.Option>
            <Select.Option value={1}>Important</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Urgency"
          name="Urgency"
          rules={[{ required: true}]}
        >
          <Select>
            <Select.Option value={0}>Not Urgent</Select.Option>
            <Select.Option value={1}>Urgent</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item
          label="Tag"
          name="Tag"
          rules={[{ required: true, message: 'Please input Tag.' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desc"
          name="Desc"
          rules={[{ message: 'details of task' }]}
        >
         <Input.TextArea />
        </Form.Item>
      </Form>
    </div>
  );
};
export default UserForm;

