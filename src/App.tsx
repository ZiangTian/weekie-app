import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile'; // 导入 Profile 组件
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    /* test home */
  // return (
  //   <Routes>
  //     <Route path="/home" element={<Home />} />
  //     <Route path="*" element={<Navigate to="/home" />} />
  //   </Routes>
  // );


  return (
    <Routes>
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route
        path="/home"
        element={
          isAuthenticated ? (
            <Home />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/profile"
        element={
          isAuthenticated ? (
            <Profile />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );


};

export default App;
