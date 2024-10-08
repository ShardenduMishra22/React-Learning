import {useState} from "react";
import UserContext from './UserContext';

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
    const [user, SetUser] = useState({});

    // console.log(typeof(user));
    // console.log((user));

    return (
        <UserContext.Provider value={{ user, SetUser }}>
            {children}
        </UserContext.Provider>
    );
}


export default UserContextProvider;