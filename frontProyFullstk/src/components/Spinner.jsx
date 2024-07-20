import './Spinner.scss'

const Spinner = () => {
    return (
        <div className="space">
            <div className="moon">
                <div className="crater"></div>
                <div className="crater"></div>
                <div className="crater"></div>
            </div>
            <div className="orbit">
                <div className="rocket"></div>
            </div>
        </div>
    )
}

export default Spinner
