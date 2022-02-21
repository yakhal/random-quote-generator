import Quote from "./Quote";
import Buttons from "./Buttons";


const Card = (props) => {

    return (
        <div className="px-10 py-9 bg-white rounded-md">
            <Quote data={props.data}></Quote>
            <Buttons color={props.data.color} getQuote={props.getQuote} data={props.data}></Buttons>
        </div>
    );
}

export default Card;
