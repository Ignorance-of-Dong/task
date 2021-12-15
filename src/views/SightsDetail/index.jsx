import "./index.scss"
import Header from "../../component/Header"
import query from '../../uitls/useQuery'

import sightsList from "../../data/sights"
import { useState, useEffect } from "react";
function SightsDetail(props) {
    let [detail, setDetail] = useState(null)
    useEffect(() => {
        const { id, sightId} = query()
        
        let citySights = sightsList.filter(item => {
            return item.id === id;
        })
        let result = citySights[0].sights.filter(item => {
            return item.id === Number(sightId);
        })
        setDetail(result[0])
    }, [])
    return <>
        <div className="main-container">
            <Header {...props}/>
            <div className="content">
                <div className="sights-detail-container">
                    <h3>{detail && detail.name}</h3>
                    <div className="sights-desc">
                        <div className="line"></div>
                        <span>{detail && detail.desc}</span>
                    </div>
                    <div className="sights-pics">
                        {
                            detail && detail.images.map((item, index) => {
                                return <div className="sights-item" key={index}>
                                <img src={item} alt="" />
                            </div>
                            })
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SightsDetail