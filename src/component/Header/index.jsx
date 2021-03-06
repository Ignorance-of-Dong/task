import "./index.scss";
import { useState } from "react"
import Catalogue from "../Svg/Catalogue"
import navList from "../../data/nav"
import { useStore } from '../../store';
function Header(props) {
    let [dropStatus, setDropStatus] = useState(false)
    const [state] = useStore();
    console.log(state)
    const handleDropdown = () => {
        setDropStatus(!dropStatus)
    }
    const handleNavLink = (detail) => {
        props.history.push(detail.path)
    }
    return <>
        <header className="header-container">
            <span className="header-title" onClick={() => {
                props.history.push("/home")
            }}>
                Traveling China
            </span>
            <div className="spacer"></div>
            <div className="nav-list">
                {
                    navList.map(item => {
                        return <div key={item.id} className="nav-item" onClick={() => {
                            handleNavLink(item)
                        }}>
                            <span>{item.navName}</span>
                        </div>
                    })
                }
            </div>
            <div className="nav-dropdown" onClick={() => {
                handleDropdown()
            }}>
                <div className="icon-size"><Catalogue /></div>
                <div className={dropStatus ? "nav-dropdowm-list translate" : "nav-dropdowm-list"}>
                    {
                        navList.map(item => {
                            return <div key={item.id} className="nav-item" onClick={() => {
                                handleNavLink(item)
                            }}>
                                <span>{item.navName}</span>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="header-user">
                <span>{state.nickName || "--"}</span>
            </div>
        </header>

    </>
}
export default Header