import React from "react"
const UserContext = React.createContext({
    idToken : null,
    setIdToken : (idToken)=>{}
})
export default UserContext;