import { useLocation, useNavigate } from "react-router-dom";

const ExpandedMail = () => {
    const location = useLocation();
    const emailObj = location.state.data;
    const navigate = useNavigate();
    // console.log(emailObj);
    return (
        <div>
            <button onClick={()=>navigate(-1)}>Go Back</button>
            <div>From : {emailObj.emailFrom}</div>
            <div>Subject : {emailObj.subject}</div>
            <div>Body : 
                {emailObj.body}</div>
        </div>
    )
};
export default ExpandedMail;
