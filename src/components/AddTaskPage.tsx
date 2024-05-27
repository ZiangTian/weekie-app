import React, { useState, MutableRefObject, ForwardedRef, forwardRef } from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
import { FormInstance } from 'antd/es/form';
import withModal from './useModal';
import UserForm from './UserForm';
import './MaintaskStyles.css';
import { PlusIcon } from './Icon/Icon';

export default function TestPage() {
    const [visiable, setVisiable] = useState(false);
    // 打开弹窗
    const open = () => {
      setVisiable(true);
    };
    //关闭弹窗
    const close = () => {
      setVisiable(false);
    };
    //点击确定提交表单
    const submit = (ref: MutableRefObject<FormInstance>) => {
      ref.current.submit();
    };
    const afterSubmit = () => {
      close();
    };
    const UserFormModal = withModal({ title: 'AddTask' }, { afterSubmit })(React.forwardRef(UserForm));
  
    return (
      <div>
        <div className="add-task-btn" onClick={open}>
            <PlusIcon />
            <div className='add-task-text'>Add Task</div>
        
        </div>
        <UserFormModal visible={visiable} onCancel={close} onOk={submit} />
      </div>
    );
  }
  
