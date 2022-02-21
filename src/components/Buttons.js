import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

const Buttons = (props) => {

    return (
        <div className="flex flex-row justify-between mt-4">
            <div className="space-x-2">
                <Button color={props.color}>
                    <a href={"https://twitter.com/intent/tweet?text="+props.data.quote+"%0A%e2%80%93 "+props.data.author}>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                </Button>
                <Button color={props.color}>
                    <a href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption='+encodeURIComponent(props.data.author)+'&content=' +encodeURIComponent(props.data.quote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'}>
                    <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon></a>
                </Button>
            </div>
            <Button performAction={props.getQuote} color={props.color}>New Quote</Button>
        </div>
    );
}

export default Buttons;