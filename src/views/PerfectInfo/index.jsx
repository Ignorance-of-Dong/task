import "./index.scss"
import { fetchUpdateUser } from "../../services/fake-services"
import { useState } from "react"
import Toasts from "../../component/Loading";
import query from '../../uitls/useQuery'
import { useStore } from "../../store"
function PerfectInfo(props) {

    let [nickName, setNickName] = useState("Visitor");
    let [age, setAge] = useState("");
    let [decs, setDesc] = useState("");

    const [/* state */, dispatch] = useStore();

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
            dispatch({ type: 'updateNickName', nickName: res.profile.nickName })
            props.history.push("/home")
        } catch (error) {
            Toasts(error.error, 1000);
        }
    }
    return <div className="perfect-container">
        <div className="perfect-content">
            <div className="perfect-title">
                <h3>Complete your profile</h3>
            </div>
            <div className="perfect-form">
                <div className="perfect-input">
                    <div className="form-label">Nickname：</div>
                    <input type="text" placeholder="Please enter the Nickname" value={nickName} onChange={(e) => {
                        setNickName(e.target.value)
                    }} />

                </div>
                <div className="perfect-input">
                    <div className="form-label">Age：</div>
                    <input type="text" placeholder="Please enter the Age" value={age} onChange={(e) => {
                        setAge(e.target.value)
                    }} />
                </div>
                <div className="perfect-input">
                    <div className="form-label">Description：</div>
                    <input type="text" placeholder="Please enter the Description" value={decs} onChange={(e) => {
                        setDesc(e.target.value)
                    }} />

                </div>
            </div>
            <div className="perfect-button">
                <div onClick={() => { handleSubmit() }}>Skip</div>
                <div onClick={() => { handleSubmit() }}>Submit</div>
            </div>
        </div>
    </div>
}
export default PerfectInfo