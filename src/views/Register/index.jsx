import React from "react"
import "./index.scss"
import { useState } from "react"

function Register() {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");
    let [repectPassword, setrepectPassword] = useState("");


    let [isFirstName, setisFirstName] = useState(0);
    let [isFirstpws, setisFirstpws] = useState(0);
    let [isFirstRepectpws, setisFirstRepectpws] = useState(0);


    return <div className="register-container">
        <div className="register-content">
            <div className="register-title">
                <h3>register</h3>
            </div>
            <div className="register-form">
                <div
                    className={!isFirstName || userName ? "register-input" : "register-input is-error"}
                >
                    <div className="form-label">账号：</div>
                    <input type="text" placeholder="请输入账号" value={userName} onChange={(e) => {
                        setUserName(e.target.value)
                        setisFirstName(isFirstName + 1)
                    }} />
                    {
                        !isFirstName || userName ? null : <div className="form-error-text">
                            请输入账号
                        </div>
                    }
                </div>
                <div

                    className={!isFirstpws || password ? "register-input" : "register-input is-error"}
                >
                    <div className="form-label">密码：</div>
                    <input type="text" placeholder="请输入密码" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                        setisFirstpws(isFirstpws + 1)
                    }} />
                    {
                        !isFirstpws || password ? null : <div className="form-error-text">
                            请输入密码
                        </div>
                    }
                </div>
                <div
                    className={!isFirstRepectpws || repectPassword ? "register-input" : "register-input is-error"}
                >
                    <div className="form-label">确认密码：</div>
                    <input type="text" placeholder="请输入密码" value={repectPassword} onChange={(e) => {
                        setrepectPassword(e.target.value)
                        setisFirstRepectpws(isFirstRepectpws + 1)
                    }} />
                    {
                        !isFirstRepectpws || repectPassword ? null : <div className="form-error-text">
                            请输入确认密码
                        </div>
                    }
                </div>
            </div>
            <div className="register-button">
                register
            </div>
        </div>
    </div>
}
export default Register