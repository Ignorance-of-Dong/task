import "./index.scss"
function Back(props) {
    return <div className="back-container" onClick={() => {
        props.history.goBack()
    }}>
        Back
    </div>
}
export default Back