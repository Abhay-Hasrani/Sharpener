import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import UserContext from '../../store/user-context';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const passRef = useRef();
  const userCtx = useContext(UserContext);
  const history = useHistory();
  async function changePasswordFormSubmitHandler(e){
    e.preventDefault();
    const enteredPassword = passRef.current.value;
    const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDw5CCDQ6E-9CjH3S4RnAR1LHpPmIEt_ao",{
      method:"POST",
      body:JSON.stringify({
        idToken : userCtx.idToken,
        password : enteredPassword,
        returnSecureToken : true
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    if(res.ok){
      // const prevtoekn = userCtx.idToken;
      userCtx.setIdToken(data.idToken);
      // console.log(prevtoekn+"............. \n"+data.idToken);
      console.log("changed password successfully");
      history.replace('/');

    }else{
      alert(data.error.message);
    }
  }
  return (
    <form className={classes.form} onSubmit={changePasswordFormSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={passRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
