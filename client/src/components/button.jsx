import PropTypes from "prop-types"
import "./styles/button.css"

function Button({text, onClick, type}) {
    return(
        <button
        type={type === "submit" ? "submit" : "button"}
        className="buttonNavBar"
        onClick={onClick}
        >
        {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
  };

  Button.defaultProps = {
    onClick: () => {},
    type: "button", // Par défaut, le type est "button"
  };

export default Button;