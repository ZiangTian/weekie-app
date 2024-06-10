import './InfoFormStyles.css';
import {images} from '../assets/images';
import axios from 'axios';
import {usr} from './MainTask';
import React, { useState, useEffect } from 'react';
const InfoForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    read(); // 调用 read 函数获取初始数据
  }, []); // 空依赖数组确保只在组件加载时调用一次
  const [userInfo, setUserInfo] = useState({
    firstNamePlaceholder: "Enter your first name",
    lastNamePlaceholder: "Enter your last name",
    emailPlaceholder: "Enter your email"
  });

  const saveUserInfo = async() => {
    const token=localStorage.getItem("token");
    //创建一个usr对象，传给post方法
    const usr = {
      firstName: firstName,
      lastName: lastName,
      email: email
    };
    const response = await axios.post('http://47.115.213.200/api/change',usr, {
      headers: {
        Authorization: token // 使用Token进行认证
      }
    });
    
  };

  const handleLogout = () => {
    console.log('User logged out');
    window.location.href = '/login';
  };
  const read = async(): Promise<any> => {
   
    // 
    const token=localStorage.getItem("token");
    
      // 发起带有认证头部的GET请求
      const response = await axios.get('http://47.115.213.200/api/read', {
        headers: {
          Authorization: token // 使用Token进行认证
        }
      });
 
    if (response.data.code=='1') {
      const usr = response.data.data;
      setUserInfo({
        firstNamePlaceholder: usr.firstName ,
        lastNamePlaceholder: usr.lastName ,
        emailPlaceholder: usr.email 
      });
    } else {
      
    }
  }
  
  return (

    <div className="info-form-container">

      <div className="info-form-picture">
        <div className="info-form-picture-frame">
          <img src={images['pfp']}  alt="Profile" className="info-form-picture-image" />
        </div>
      </div>


      <div className="info-form-row">
        <div className="info-form-field">
          <label className="info-form-label">First name</label>
          <input
            className={`info-form-input ${!firstName ? 'placeholder' : 'filled'}`}
            type="text"
            value={firstName}
            placeholder={userInfo.firstNamePlaceholder}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={saveUserInfo}
          />``
        </div>

        <div className="info-form-field">
          <label className="info-form-label">Last name</label>
          <input
            className={`info-form-input ${!lastName ? 'placeholder' : 'filled'}`}
            type="text"
            value={lastName}
            placeholder={userInfo.lastNamePlaceholder}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={saveUserInfo}
          />
        </div>
      </div>

      <div className="info-form-field email-field">
        <label className="info-form-label">Email</label>
        <div className="info-form-input-with-icon">
        <img src={images['iconMail']}  alt="Profile" className="info-form-icon" />

        <input
            className={`info-form-input-em email-input ${!email ? 'placeholder' : 'filled'}`}
            type="email"
            value={email}
            placeholder={userInfo.emailPlaceholder}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={saveUserInfo}
          />
        </div>
      </div>

      <button onClick={handleLogout} className="info-form-logout-button">
        Log out
      </button>
      
      <button onClick={saveUserInfo} className="info-form-save-button">
        Save
      </button>
    </div>
    
  );
};

export default InfoForm;