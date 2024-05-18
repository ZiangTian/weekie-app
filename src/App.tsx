import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // test home
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );

  // return (
  //   <Routes>
  //     <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
  //     {/* <Route path="/login" element={<Login setIsAuthenticated={() => {}} />} /> */}
  //     <Route
  //       path="/home"
  //       element={
  //         isAuthenticated ? (
  //           <div>
  //             <h1>Welcome to the Home Page</h1>
  //             <Scheduler events={EVENTS} />
  //           </div>
  //         ) : (
  //           <Navigate to="/login" />
  //         )
  //       }
  //     />
  //     <Route path="*" element={<Navigate to="/login" />} />
  //   </Routes>
  // );
};

export default App;
