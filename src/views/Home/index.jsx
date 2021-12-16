import Header from "../../component/Header"
import pic from "../../assets/image/ZJ02.png"
import sightsList from "../../data/sights"
import "./index.scss"
import { useEffect } from "react"
import { ToastLoding } from "../../component/Loading";
let ToastLodingPro = new ToastLoding();
function Home(props) {
    useEffect(() => {
        ToastLodingPro.loading();
        setTimeout(() => {
            ToastLodingPro.hide();
        }, 1000)
    }, [])
    return <>
        <div className="main-container">
            <Header {...props}></Header>
            <main n className="container">
                <div className="show-pic">
                    <img src={pic} alt="" />
                </div>
                <p className="home-title">Traveling Cities</p>
                <div className="city-container">
                    {
                        sightsList.map(item => {
                            return <div className="city-item" key={item.id} onClick={() => {
                                props.history.push(`/citySights?id=${item.id}`)
                            }}>
                                <img src={item.sights[0].images[0]} alt="" />
                                <p className="city-name"><span>{item.city}</span></p>
                            </div>
                        })
                    }
                </div>
            </main>
            <footer className="footer-container">
                Copyright 2021 Chang Li all rights reserved
            </footer>
        </div>
    </>
}
export default Home