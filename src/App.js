import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
Routes,
Navigate,
Route
}from 'react-router-dom';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
   <>
   <Router>
   <Routes>
      <Route exact path='/login' element={<LoginPage></LoginPage>}>
      </Route>
      <Route exact path='/register' element={<RegisterPage></RegisterPage>}>
      </Route>
      <Route exact path='/dashboard' element={<Dashboard></Dashboard>}>   
      </Route>
      <Route path='/' element={<Dashboard></Dashboard>}>  
      </Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
