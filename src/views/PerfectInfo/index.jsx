import "./index.scss"
import { fetchUpdateUser } from "../../services/fake-services"
import { useState } from "react"
import Toasts from "../../component/Loading";
import query from '../../uitls/useQuery'

function PerfectInfo(props) {

    let [nickName, setNickName] = useState("默认昵称");
    let [age, setAge] = useState("");
    let [decs, setDesc] = useState("");

    const handleSubmit = async () => {
        let { userName } = query()
        try {
            let params = {
                username: userName,
                profile: {
                    nickName: nickName,
                    age: age,
                    decs: decs
                }
            }
            let res = await fetchUpdateUser(params)
        } catch (error) {
            Toasts(error.error, 1000);
        }
        props.history.push("/home")
    }
    return <div className="perfect-container">
        <div className="perfect-content">
            <div className="perfect-title">
                <h3>完善个人信息</h3>
            </div>
            <div className="perfect-form">
                <div className="perfect-input">
                    <div className="form-label">昵称：</div>
                    <input type="text" placeholder="请输入昵称" value={nickName} onChange={(e) => {
                        setNickName(e.target.name)
                    }} />

                </div>
                <div className="perfect-input">
                    <div className="form-label">年龄：</div>
                    <input type="text" placeholder="请输入年龄" value={age} onChange={(e) => {
                        setAge(e.target.name)
                    }} />

                </div>
                <div className="perfect-input">
                    <div className="form-label">简介：</div>
                    <input type="text" placeholder="请输入简介" value={decs} onChange={(e) => {
                        setDesc(e.target.name)
                    }} />

                </div>
            </div>
            <div className="perfect-button">
                <div onClick={() => {
                    handleSubmit()
                }}>pass</div>
                <div onClick={() => {
                    handleSubmit()
                }}>submit</div>
            </div>
        </div>
    </div>
}
export default PerfectInfo