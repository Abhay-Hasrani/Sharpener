import { NavLink, useNavigate } from "react-router-dom";

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
        <NavLink to="/expenseManager">Manage Expenses</NavLink>
        </>
    )
}
export default Welcome;