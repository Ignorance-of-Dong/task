import Header from "../../component/Header"
import Toasts from "../../component/Loading";

import "./index.scss"
function Survey(props) {
    return <>
        <div className="main-container">
            <Header {...props} />
            <main className="content">
                <div className="survey-container">
                    <p className="survey-title">Take a Survey</p>
                    <div className="survey-form">
                        <div className="survey-form-item">
                            <div className="label">Which sights you like most?</div>
                            <div className="survey-input">
                                <input type="text" />
                            </div>
                            
                        </div>
                        <div className="survey-form-item">
                            <div className="label">Leave your information for future updates!</div>
                            <div className="survey-input">
                                <input type="text" placeholder="Name"/>
                            </div>
                            <div className="survey-input">
                                <input type="text" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="submit-button" onClick={() => {
                             Toasts("Your suggestion has been submitted!", 2000);
                        }}>
                            Submit
                        </div>
                        
                    </div>
                </div>
            </main>
            <footer className="footer-container">
                Copyright 2021 Chang Li all rights reserved
            </footer>
        </div>
    </>
}

export default Survey