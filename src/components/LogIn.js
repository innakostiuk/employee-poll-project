import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const LogIn = ({ names, dispatch }) => {

    const handleClick = (name) => {
        dispatch(setAuthedUser(name));
    }

    return (
        <div className="w3-large">
            <div className="w3-container w3-padding-64 w3-center">
                <h2 className="w3-padding-64">
                    <span className="w3-bottombar w3-border-dark-grey w3-padding-16">Employee Polls</span>
                </h2>
                <p>Login</p>
                <div className="w3-dropdown-hover">
                    <button className="w3-button w3-black">Hover To Select User</button>
                    <div className="w3-dropdown-content w3-bar-block w3-border" style={{ width: '100%' }}>
                        {names.map(name => (
                            <div key={name} className="w3-bar-item w3-button" onClick={() => handleClick(name)} value={name}>{name}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ users }) => ({
    names: Object.keys(users).map(name => name)
});

export default connect(mapStateToProps)(LogIn);