import classNames from "classnames";

const Button = (props) => {
    return (
        <button className={classNames("button", {
                "orange-btn": props.orangeBtn,
                "black-btn": props.blackBtn,
                "gray-btn": props.grayBtn,
                "orange-outline-btn": props.orangeOutlineBtn,
                "gray-outline-btn": props.grayOutlineBtn,
                "white-plus-btn": props.whitePlusBtn,
            })}>
            {props.children}
        </button>
    );
};

export default Button;
