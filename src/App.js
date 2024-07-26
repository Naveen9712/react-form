import React from 'react';
import Home from './pages/home';
import LeadForm from './components/leads/add';
import Header from './components/header';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import UsersList from './components/users';
import EditUser from './components/users/edit';
import Login from './components/users/login';
import Signup from './components/users/signup';
import EditLead from './components/leads/edit'; 
import LeadList from './components/leads'; 
import ChannelsList from './components/channels';
import AddChannel from './components/channels/add';
import EditChannel from './components/channels/edit';
import Posts from './components/posts';
import AddPost from './components/posts/add';
import EditPost from './components/posts/edit';
import ForgotPassword from "./components/users/forgotpassword";
import ChangePassword from "./components/users/changepassword";
import ChatLog from "./components/chatlog";
import AddProfile from "./components/profile/add";
import EditProfile from "./components/profile/edit";
import ProfileList from "./components/profile";


const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

const Main = () => {
  const location = useLocation();
  
  return (
    <>
      {/* Conditionally render Header based on route */}
      {location.pathname !== '/' && location.pathname !== '/signup' && <Header />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add-lead' element={<LeadForm />} />
        <Route path='/users-list' element={<UsersList />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
        <Route path='/leads-list' element={<LeadList />} />
        <Route path='/edit-lead/:id' element={<EditLead />} />
        <Route path='/channels-list' element={<ChannelsList />}/>
        <Route path='/add-channel' element={<AddChannel />}/>
        <Route path='/edit-channel/:id' element={<EditChannel />}/>
        <Route path="/posts" element={<Posts />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/inbox" element={<ChatLog />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path='/profile' element={<ProfileList />} />
        <Route path='/add-profile' element={<AddProfile />} />
        <Route path='/edit-profile/:id' element={<EditProfile />} />
      </Routes>
    </>
  );
};

export default App;
