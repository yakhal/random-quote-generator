import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

const Buttons = (props) => {

    return (
        <div className="flex justify-between mt-4">
            <div className="flex space-x-2">
                <a
                    href={"https://twitter.com/intent/tweet?text=" + props.data.quote + "%0A%e2%80%93 " + props.data.author}
                    className="p-3 text-center min-w-[45px] rounded-sm text-white text-sm"
                    style={{ backgroundColor: props.color }}
                >
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
                <a
                    href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' + encodeURIComponent(props.data.author) + '&content=' + encodeURIComponent(props.data.quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'}
                    className="p-3 text-center min-w-[45px] rounded-sm text-white text-sm"
                    style={{ backgroundColor: props.color }}
                >
                    <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon>
                </a>
            </div>
            <button
                onClick={props.getQuote}
                className="p-3 flex-none min-w-[45px] rounded-sm text-white text-sm"
                style={{ backgroundColor: props.color }}
            >
                New Quote
            </button>
        </div>
    );
}

export default Buttons;