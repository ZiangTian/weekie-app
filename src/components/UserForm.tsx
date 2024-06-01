import { Form, Input, Select,DatePicker } from 'antd';
import type { FormInstance } from 'antd/es/form';
import React from 'react';
import ImportLabel from './ImpLabelComponent'; // Import the importLabel component

// ...


type PropsType = React.PropsWithChildren<{
  afterSubmit?: (values: any, form: FormInstance<any>) => void;
  initialImportance?: boolean;
  initialUrgency?: boolean;
}>;

const UserForm = (props: PropsType, ref?: React.ForwardedRef<FormInstance>) => {
  // const { afterSubmit, initialImportance, initialUrgency } = props;
  const [form] = Form.useForm();
  
  const onSubmit = (values: any) => {
    console.log(values);
    //await  fetch ...
    form.resetFields();
    values.Importance = props.initialImportance;
    values.Urgency = props.initialUrgency;
    props.afterSubmit?.(
      // set the initialImportance and initialUrgency to the values
      values,
      form
    );
  };

  // if the props.initialImportance is true, we find the task in the database and set its importance to true

  
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
        >
          <ImportLabel importance={props.initialImportance ?? true} urgency={props.initialUrgency ?? true} selector={true} /> 
          <Input type="hidden" name = "initialImportance" value={props.initialImportance?.toString() ?? "true" }  />
          
        </Form.Item>


        <Form.Item
          label="Urgency"
          name="Urgency"
       
        >
          {/* <Select>
            <Select.Option value={0}>Not Urgent</Select.Option>
            <Select.Option value={1}>Urgent</Select.Option>
          </Select> */}
          <ImportLabel importance={props.initialImportance ?? true} urgency={props.initialUrgency ?? true} selector={false} /> 
          <Input type="hidden" name='initialUrgency' value={props.initialUrgency?.toString() ?? "true"} />
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

