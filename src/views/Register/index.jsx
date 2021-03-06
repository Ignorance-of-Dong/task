import React from "react"
import "./index.scss"
import { useState } from "react"
import { fetchRegister } from "../../services/fake-services"
import Toasts from "../../component/Loading";

function Register(props) {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");
    let [repectPassword, setrepectPassword] = useState("");


    let [isFirstName, setisFirstName] = useState(0);
    let [isFirstpws, setisFirstpws] = useState(0);
    let [isFirstRepectpws, setisFirstRepectpws] = useState(0);


    const handleRegister = async () => {
        setisFirstName(1)
        setisFirstpws(1)
        setisFirstRepectpws(1)
        if (userName === "" || password === "" || repectPassword === "") return;
        try {
            await fetchRegister({
                username: userName
            })
            props.history.push(`/perfectInfo?userName=${userName}`)
        } catch (error) {
            Toasts(error.error, 1000);
        }
    }

    return <div className="register-container">
        <div className="register-content">
            <div className="register-title">
                <h3>Register</h3>
            </div>
            <div className="register-form">
                <div
                    className={!isFirstName || userName ? "register-input" : "register-input is-error"}
                >
                    <div className="form-label">Username：</div>
                    <input type="text" placeholder="Please enter the Username" value={userName} onChange={(e) => {
                        setUserName(e.target.value)
                        setisFirstName(isFirstName + 1)
                    }} />
                    {
                        !isFirstName || userName ? null : <div className="form-error-text">
                            Please enter the Username
                        </div>
                    }
                </div>
                <div

                    className={!isFirstpws || password ? "register-input" : "register-input is-error"}
                >
                    <div className="form-label">Password：</div>
                    <input type="password" placeholder="Please enter the Password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                        setisFirstpws(isFirstpws + 1)
                    }} />
                    {
                        !isFirstpws || password ? null : <div className="form-error-text">
                            Password cannot be empty
                        </div>
                    }
                </div>
                <div
                    className={!isFirstRepectpws || repectPassword ? "register-input" : "register-input is-error"}
                >
                    <div className="form-label">Confirm again：</div>
                    <input type="password" placeholder="Confirm again" value={repectPassword} onChange={(e) => {
                        setrepectPassword(e.target.value)
                        setisFirstRepectpws(isFirstRepectpws + 1)
                    }} />
                    {
                        !isFirstRepectpws || repectPassword ? null : <div className="form-error-text">
                            Password cannot be empty
                        </div>
                    }
                </div>
            </div>
            <div className="register-button" onClick={() => {
                handleRegister()
            }}>
                Register and log in
            </div>
        </div>
    </div>
}
export default Register