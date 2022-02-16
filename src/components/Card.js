import Quote from "./Quote";
import Buttons from "./Buttons";


const Card = (props) => {

    return (
        <div className="max-w-lg px-10 py-9 mx-auto bg-white rounded-md">
            <Quote data={props.data}></Quote>
            <Buttons getQuote={props.getQuote} data={props.data}></Buttons>
        </div>
    );
}

export default Card;
