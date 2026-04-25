import React, { useContext } from "react";

const UserContext = React.createContext();

export default UserContext;

// we have to create the provider and wrap the components that need the access to the context inside the wrapper
// Now the the all components inside the wrapper has the access to the UserContext varibale created 

// <UserContext>

//     <Login/>
//     <Card>
//         <Left/>
//         <Right/>
//     </Card>
//     <Card1/>

// </UserContext>