import React, { useState } from 'react';
import MyForm from './MyForm';
import './index.css';
function App() {
  const [MyUserList,UpdateMyList] = useState([]);
  function formdatahandler(userId,userName,userAge,collegeName){
      UpdateMyList((previousList)=>{
        return [<div className="listItem" key={userId}>{userName} ({userAge} years old) - {collegeName}</div>,...previousList];
      });
  }
  return (
    //use empty tag or <React.Fragment> both are same;
    <>
      <MyForm userData = {formdatahandler} />
      {MyUserList}
    </>
  );
}

export default App;
