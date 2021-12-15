import "./index.scss"
function PerfectInfo (props) {
    return <div className="perfect-container">
        <div className="perfect-content">
            <div className="perfect-title">
                <h3>完善个人信息</h3>
            </div>
            <div className="perfect-form">
                <div className="perfect-input">
                    <div className="form-label">昵称：</div>
                    <input type="text" placeholder="请输入账号"/>
                    
                </div>
                <div className="perfect-input">
                    <div className="form-label">年龄：</div>
                    <input type="text" placeholder="请输入密码"/>
                    
                </div>
                <div className="perfect-input">
                    <div className="form-label">简介：</div>
                    <input type="text" placeholder="请输入密码"/>
                    
                </div>
            </div>
            <div className="perfect-button">
                <div onClick={() => {
                    props.history.push("/home")
                }}>pass</div>
                <div onClick={() => {
                    props.history.push("/home")
                }}>submit</div>
            </div>
        </div>
    </div>
}
export default PerfectInfo