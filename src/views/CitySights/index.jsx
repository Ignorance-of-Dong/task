import Header from "../../component/Header"
import "./index.scss"
import query from '../../uitls/useQuery'
import sightsList from "../../data/sights"
import { useState, useEffect } from "react";

function CitySights(props) {
    const { id } = query()
    let [detail, setDetail] = useState(null)
    useEffect(() => {
        const { id } = query()
        
        console.log(id)
        let result = sightsList.filter(item => {
            return item.id === id;
        })
        console.log(result)
        setDetail(result[0])
    }, [])
    return <>
        <div className="main-container">
            <Header {...props}></Header>
            <div className="content">
                <div className="show-pic"
                 
                >
                    <img src={detail && detail.sights[0].images[0]} alt="" />
                    <p className="city-name"><span>{detail && detail.city}</span></p>
                </div>
                <p className="home-title">必游景点</p>
                {
                    detail && detail.sights.map(item => {
                        return <div className="city-sights-container" key={item.id} onClick={() => {
                            props.history.push(`/sightsDetail?id=${id}&sightId=${item.id}`)
                        }}>
                            <div className="city-pic"
                            
                            >
                                <img src={item.images[0]} alt="" />
                            </div>
                            <div className="sights-content" >
                                <p className="sight-name">
                                    {item.name}
                                </p>
                                <p className="sight-desc">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    </>
}

export default CitySights