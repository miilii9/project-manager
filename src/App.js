import React from "react";
import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signin from "./Pages/Signin/Signin";
import Create from "./Pages/Create/Create";
import { useAuth } from "./Hooks/useAuth";
import SideBar from "./Components/SideBar/SideBar";
import StatSidebar from "./Components/StatSidebar/StatSidebar";
import Project from "./Pages/Project/Project";
function App() {
  const { user, authIsReady } = useAuth();

  return (
    <div className='App'>
      <BrowserRouter>
        {user && <SideBar />}
        <div className='container'>
          {authIsReady && (
            <>
              <Navbar />
              <Routes>
                <Route path='/' index element={user ? <Home /> : <Login />} />
                <Route
                  path='home'
                  name='home'
                  element={user ? <Home /> : <Login />}
                />
                <Route
                  path='/login'
                  name='login'
                  element={!user ? <Login /> : <Home />}
                />
                <Route
                  path='/create'
                  name='create'
                  element={user ? <Create /> : <Login />}
                />
                <Route
                  path='/signin'
                  name='signin'
                  element={!user ? <Signin /> : <Home />}
                />
                <Route
                  exact
                  path='/projects/:id'
                  name='project'
                  element={user ? <Project /> : <Login />}
                />
              </Routes>
            </>
          )}
        </div>
        {user && <StatSidebar className='statsidebar-whole' />}
      </BrowserRouter>
    </div>
  );
}

export default App;
