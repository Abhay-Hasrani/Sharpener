import React, { useState } from 'react';
import MyForm from './MyForm';

function App() {
  const [MyUserList,UpdateMyList] = useState([]);
  function formdatahandler(userId,userName,userAge){
      UpdateMyList((previousList)=>{
        return [<div key={userId}>{userName} ({userAge} years old)</div>,...previousList];
      });
  }
  return (
    <div>
      <MyForm userData = {formdatahandler} />
      {MyUserList}
    </div>
  );
}

export default App;
