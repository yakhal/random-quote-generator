import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';



const Quote = (props) => {
    return (
        <div className="text-indigo-500">
            <blockquote className="flex items-start mb-4 space-x-2">
                <FontAwesomeIcon icon={faQuoteLeft} color="inherit" size="2x" />
                <p className="text-2xl text-center">{props.data.quote}</p>
            </blockquote>
            <figcaption className="mb-5 font-thin text-right">— {props.data.author}</figcaption>
        </div>
    );
}

export default Quote;