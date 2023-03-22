import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes >
          <Route exact path='/' element={<Dashboard/>} />
          <Route exact path='/projects/:id' element={ <ProjectDetail /> } />
          <Route exact path='/login' element={ <SignIn /> } />
          <Route exact path='/signup' element={ <SignUp /> } />
          <Route exact path='/create-project' element={ <CreateProject /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
