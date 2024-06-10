import { Form, Input, Select,DatePicker } from 'antd';
import type { FormInstance } from 'antd/es/form';
import moment, { Moment } from 'moment'
import React from 'react';
type PropsType = React.PropsWithChildren<{
  afterSubmit?: (values: any, form: FormInstance<any>) => void;
}>;


const UserForm = (props: PropsType, ref?: React.ForwardedRef<FormInstance>) => {

  const [form] = Form.useForm();

  const validateEndTime = (_: any, value: any) => {
    const startTime = form.getFieldValue('startTime')?moment(form.getFieldValue('startTime').toISOString()):null
    const endTime = form.getFieldValue('endTime')?moment(form.getFieldValue('endTime').toISOString()):null

    if (!startTime || !endTime) {
      return Promise.resolve();
    }

    if (startTime.isAfter(endTime)) {
      return Promise.reject(new Error('Start time must be before end time'));
    }
    return Promise.resolve();
  };

  const validateDDLTime = (_: any, value: any) => {
    const endTime = form.getFieldValue('endTime')?moment(form.getFieldValue('endTime').toISOString()):null
    const deadLine = form.getFieldValue('deadLine')?moment(form.getFieldValue('deadLine').toISOString()):null

    if (!endTime || !deadLine) {
      return Promise.resolve();
    }

    if (endTime.isAfter(deadLine)) {
      return Promise.reject(new Error('End time must be before deadline'));
    }

    return Promise.resolve();
  };
  
  // // 监听字段变化，重新触发校验
  // const onFieldsChange = (changedFields: any) => {
  //   changedFields.forEach((field: any) => {
  //     if (['startTime', 'endTime', 'deadLine'].includes(field.name[0])) {
  //       form.validateFields([field.name[0]]);
  //     }
  //   });
  // };

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

         <Form.Item
          name="startTime"
          label="startTime"
          rules={[
            { required: true, message: 'Please choose start time' },
           
          ]}
          
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" placeholder='choose start time' />
        </Form.Item>

        <Form.Item
          name="endTime"
          label="endTime"
          rules={[
            { required: true, message: 'Please choose end time' },
            { validator: validateEndTime }

          ]}
          dependencies={['startTime', 'deadLine']}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" placeholder='choose end time' />
        </Form.Item>

        <Form.Item
          name="deadLine"
          label="deadLine"
          rules={[
            { required: true, message: 'Please choose deadline' },
            { validator: validateDDLTime }
          ]}
          dependencies={['startTime', 'deadLine']}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" placeholder='choose deadline' />
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

