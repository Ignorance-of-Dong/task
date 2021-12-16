import React from "react"
import "./index.scss"
import { useState } from "react"
import { fetchLogin } from "../../services/fake-services"
import Toasts from "../../component/Loading";
function Login(props) {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    let [isFirstName, setisFirstName] = useState(0);
    let [isFirstpws, setisFirstpws] = useState(0);

    const handleLogin = async () => {
        setisFirstName(1)
        setisFirstpws(1)
        if (userName === "" || password === "") return;
        try {
            await fetchLogin(userName);
            props.history.push(`/perfectInfo?userName=${userName}`)
        } catch (error) {
            Toasts(error.error, 1000);
        }
    }
    return <div className="login-container">
        <div className="login-content">
            <div className="login-title">
                <h3>Login</h3>
            </div>
            <div className="login-form">
                <div className={!isFirstName || userName ? "login-input" : "login-input is-error"}>
                    <input type="text" placeholder="请输入账号" value={userName} onChange={(e) => {
                        setUserName(e.target.value)
                        setisFirstName(isFirstName + 1)
                    }} />
                    {
                        !isFirstName || userName ? null : <div className="form-error-text">
                            请输入密码
                        </div>
                    }
                </div>
                <div className={!isFirstpws || password ? "login-input" : "login-input is-error"}>
                    <input type="text" type="password" placeholder="请输入密码" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                        setisFirstpws(isFirstpws + 1)
                    }} />
                    {
                        !isFirstpws || password ? null : <div className="form-error-text">
                            请输入密码
                        </div>
                    }
                </div>
            </div>
            <div className="login-button" onClick={() => {
                handleLogin()
            }}>
                Login
            </div>
            <div className="login-bottom" onClick={() => {
                props.history.push("/register")
            }}>
                <span>Register</span>
            </div>
        </div>
    </div>
}
export default Login