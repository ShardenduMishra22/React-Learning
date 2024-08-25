import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, SetUsername] = useState("");
    const [pass, SetPass] = useState("");

    const {SetUser} = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        SetUser({username,pass});
    };

    return (
        <>
            <div>
                <h2>Login</h2>
                <input type='text' value={username} onChange={(e) => SetUsername(e.target.value)} placeholder='Username' />
            </div>
            <div>
                <h2>Password</h2>
                <input type='password' value={pass} onChange={(e) => SetPass(e.target.value)} placeholder='Password' />
            </div>
            <div>
                <br/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
}

export default Login;
