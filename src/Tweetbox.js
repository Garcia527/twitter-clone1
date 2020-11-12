import React, {useState} from 'react';
import "./Tweetbox.css";
import { Avatar, Button} from "@material-ui/core";
import db from './firebase';

function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault(); //dont want to update

        db.collection('posts').add({
            displayName: 'OG',
            username: 'OscarGarcia327',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://avatars2.githubusercontent.com/u/66390177?s=460&u=07504b25344c9169db1a7b56916434cba8cc26bf&v=4"

        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars2.githubusercontent.com/u/66390177?s=460&u=07504b25344c9169db1a7b56916434cba8cc26bf&v=4" />
                    <input
                     onChange= {(e) => setTweetMessage(e.target.value)}
                     value={tweetMessage}
                     placeholder="What's happening?" 
                     type="text"/>
                </div>
                <input 
                value= {tweetImage}
                onChange= {(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput" 
                placeholder="Enter image URL" 
                type="text"/>

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox;
