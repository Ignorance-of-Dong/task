import Header from "../../component/Header"

import "./index.scss"
function Survey(props) {
    return <>
        <div className="main-container">
            <Header {...props} />
            <div className="content">
                <div className="survey-container">
                    <p className="survey-title">参与调查</p>
                    <div className="survey-form">
                        <div className="survey-form-item">
                            <div className="label">你最喜欢哪些景点？</div>
                            <div className="survey-input">
                                <input type="text" />
                            </div>
                            
                        </div>
                        <div className="survey-form-item">
                            <div className="label">留下您的信息以备将来更新！</div>
                            <div className="survey-input">
                                <input type="text" placeholder="名称"/>
                            </div>
                            <div className="survey-input">
                                <input type="text" placeholder="电子邮箱"/>
                            </div>
                        </div>
                        <div className="submit-button">
                            Submit
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Survey