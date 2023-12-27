import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "../styles/login.css";

function Login() {

    const navigate = useNavigate();

    // User Login info
    const database = [
        {
          id: 1,
          username: "amar",
          password: "amar123"
        },
        {
          id: 2,
          username: "akbar",
          password: "akbar123"
        },
        {
          id: 3,
          username: "antony",
          password: "antony123"
        },
        {
          id: 4,
          username: "john",
          password: "john123"
        },
        {
          id: 5,
          username: "paul",
          password: "paul123"
        }
      ];

    //Error messages
    const errors = {
        username: "Invalid Username",
        password: "Invalid Password"
    };

    //Setting user
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Generate error message
    const renderErrorMessage = (name) => {
        return name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser(prevValue => {
            if (name === "username") {
                return {
                    username: value,
                    password: prevValue.password
                };
            } else if (name === "password") {
                return {
                    username: prevValue.username,
                    password: value
                }
            }
        });
    }

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        const {username, password} = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === username.value);

        // Compare user info
        if (userData) {
            if (userData.password !== password.value) {
                // Invalid password
                setErrorMessages({name: "password", message: errors.password});
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({name: "username", message: errors.username});
        }
    };
    isSubmitted && navigate("/dashboard");

    return (
        <div className='login-page'>
            <div className="login">
                <form>
                    <div className="username-section">
                        <label htmlFor="username">User Name : </label>
                        
                        <div className="username">
                            <input type="text" name="username" value={user.username}
                                    onChange={handleChange} className="" id="username"
                                    placeholder="User Name"/>
                            {renderErrorMessage("username")} 
                        </div>  
                    </div>

                    <div className="password-section">
                        <label htmlFor="password">Password :</label>
                        <div className="pass">
                            <input type="password" autoComplete="on" value={user.password} name="password"
                                   onChange={handleChange} className="" id="password"
                                   placeholder="Password"/>
                            {renderErrorMessage("password")}
                        </div>
                    </div>
                    <div className="submit-btn">
                        <button type="submit" className="btn" onClick={handleSubmit}>Login</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Login;