const Button = (props) => {
    return (
        <button 
        onClick={props.performAction} 
        className="p-3 flex-none min-w-[45px] rounded-sm text-white text-sm"
        style={{backgroundColor: props.color}}>
            {props.children}
        </button>
    );
}

export default Button;