const Button = (props) => {
    return (
        <button onClick={props.performAction} className="bg-indigo-500 p-3 flex-none min-w-[45px] rounded-sm text-white text-sm">{props.children}</button>
    );
}

export default Button;