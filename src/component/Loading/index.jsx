import React from 'react'
import ReactDOM from 'react-dom';
import './index.scss'
import loadImage from '@/assets/images/loading.png'
function Toast(props) {
    return (
        <>
            <div className="over-toast">{props.value}</div>
        </>
    )
}

function CToast(value, time) {
    let div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<Toast value={value} />, div)
    setTimeout(() => {
        document.body.removeChild(div);
    }, time)
}

function LodingToast(props) {
    return <>
        <div className="loding-wrap">
            <div className="loding-mask"></div>
            <div className="loading-contant">
                <div className="loding-pic">
                    <img src={loadImage} alt="" />
                </div>
            </div>
        </div>
    </>
}

export class ToastLoding {

    dom = null

    loading() {
        this.dom = document.createElement('div');
        document.body.appendChild(this.dom);
        ReactDOM.render(<LodingToast />, this.dom)
    }

    hide() {
        document.body.removeChild(this.dom);
    }
}

export default CToast