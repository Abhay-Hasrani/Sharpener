import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Welcome from './components/auth/Welcome';
import UpdateProfile from './components/UpdateProfile';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn/>}/> 
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/updateProfile' element={<UpdateProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
