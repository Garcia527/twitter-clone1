import React from 'react';
import "./Tweetbox.css";
import { Avatar, Button} from "@material-ui/core";

function Tweetbox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars2.githubusercontent.com/u/66390177?s=460&u=07504b25344c9169db1a7b56916434cba8cc26bf&v=4" />
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text"/>

                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox;
