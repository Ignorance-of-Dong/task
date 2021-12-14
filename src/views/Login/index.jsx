import React from "react"
import "./index.scss"
function Login () {
    return <div className="login-container">
        <div className="login-content">
            <div className="login-title">
                <h3>Login</h3>
            </div>
            <div className="login-form">
                <div className="login-input is-error">
                    <input type="text" placeholder="请输入账号"/>
                    <div className="form-error-text">
                        请输入密码
                    </div>
                </div>
                <div className="login-input">
                    <input type="text" placeholder="请输入密码"/>
                    <div className="form-error-text">
                        请输入密码
                    </div>
                </div>
            </div>
            <div className="login-button">
                Login
            </div>
            <div className="login-bottom">
                <span>Register</span>
            </div>
        </div>
    </div>
}
export default Login