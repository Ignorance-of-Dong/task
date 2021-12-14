import React from "react"
import "./index.scss"
function Register () {
    return <div className="register-container">
        <div className="register-content">
            <div className="register-title">
                <h3>register</h3>
            </div>
            <div className="register-form">
                <div className="register-input is-error">
                    <div className="form-label">账号：</div>
                    <input type="text" placeholder="请输入账号"/>
                    <div className="form-error-text">
                        请输入账号
                    </div>
                </div>
                <div className="register-input">
                    <div className="form-label">密码：</div>
                    <input type="text" placeholder="请输入密码"/>
                    <div className="form-error-text">
                        请输入密码
                    </div>
                </div>
                <div className="register-input">
                    <div className="form-label">确认密码：</div>
                    <input type="text" placeholder="请输入密码"/>
                    <div className="form-error-text">
                        请输入密码
                    </div>
                </div>
            </div>
            <div className="register-button">
                register
            </div>
        </div>
    </div>
}
export default Register