import "./index.scss"
function PerfectInfo () {
    return <div className="perfect-container">
        <div className="perfect-content">
            <div className="perfect-title">
                <h3>完善个人信息</h3>
            </div>
            <div className="perfect-form">
                <div className="perfect-input is-error">
                    <div className="form-label">昵称：</div>
                    <input type="text" placeholder="请输入账号"/>
                    <div className="form-error-text">
                        请输入昵称
                    </div>
                </div>
                <div className="perfect-input">
                    <div className="form-label">年龄：</div>
                    <input type="text" placeholder="请输入密码"/>
                    <div className="form-error-text">
                        请输入年龄
                    </div>
                </div>
                <div className="perfect-input">
                    <div className="form-label">简介：</div>
                    <input type="text" placeholder="请输入密码"/>
                    <div className="form-error-text">
                        请输入密码
                    </div>
                </div>
            </div>
            <div className="perfect-button">
                <div>pass</div>
                <div>submit</div>
            </div>
        </div>
    </div>
}
export default PerfectInfo