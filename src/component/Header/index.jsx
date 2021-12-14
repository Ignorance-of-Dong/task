import "./index.scss"
function Header() {
    return <>
        <header className="header-container">
            <span className="header-title">
                DFV
            </span>
            <div className="spacer"></div>
            <div className="nav-list">
                <span>经典</span>
                <span>经典</span>
                <span>经典</span>
                <span>经典</span>
            </div>
            <div className="nav-dropdown">
                下拉
            </div>
            <div className="header-user">
                <span>张山</span>
            </div>
        </header>
    
    </>
}
export default Header