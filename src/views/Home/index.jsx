import Header from "../../component/Header"
import pic from "../../assets/image/ZJ02.png"
import sightsList from "../../data/sights"
import "./index.scss"
function Home(props) {
    return <>
        <div className="main-container">
            <Header {...props}></Header>
            <div className="container">
                <div className="show-pic">
                    <img src={pic} alt="" />
                </div>
                <p className="home-title">旅游城市</p>
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
            </div>
        </div>
    </>
}
export default Home