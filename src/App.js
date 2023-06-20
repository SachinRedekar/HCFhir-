import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SearchMember from './pages/SearchMember';
import HCQueryAI from './pages/HCQueryAI';
import PatientDeatil from './pages/PatientDetail';
import Settings from './pages/Settings'
const App = () => {
  return (
    <BrowserRouter>
    
      <Sidebar>
        <Routes>
          <Route path="/" element={<SearchMember />} />
          <Route path="/searchmember" element={<SearchMember />} />
          <Route path="/hcqueryai" element={<HCQueryAI />} />
          <Route path="/settings" element={<Settings />} />  
          <Route path="/patientdetail" element={<PatientDeatil />} />  
          
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;