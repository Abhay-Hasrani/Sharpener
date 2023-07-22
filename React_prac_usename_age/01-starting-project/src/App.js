import React, { useState } from 'react';
import MyForm from './MyForm';
import './index.css';
function App() {
  const [MyUserList,UpdateMyList] = useState([]);
  function formdatahandler(userId,userName,userAge){
      UpdateMyList((previousList)=>{
        return [<div className="listItem" key={userId}>{userName} ({userAge} years old)</div>,...previousList];
      });
  }
  return (
    <div >
      <MyForm userData = {formdatahandler} />
      {MyUserList}
    </div>
  );
}

export default App;
