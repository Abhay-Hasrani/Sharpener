import { useNavigate } from "react-router-dom";
import UpdateProfile from "../UpdateProfile";

const Welcome = ()=>{
    const navigate =useNavigate();
    function navigateToUpdateProfile(){
        navigate('/updateProfile');
    }
    return (
        <>
        <div>welcome To Expense Tracker</div>
        <div>
            Your Profile is incomplete <button onClick={navigateToUpdateProfile}>Complete Now</button>
        </div>
        </>
    )
}
export default Welcome;