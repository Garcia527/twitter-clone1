import React from 'react';
import './Post.css'
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/Chat";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName, 
    username,
    verified,
    timestamp, 
    text,
    image, 
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://avatars2.githubusercontent.com/u/66390177?s=460&u=07504b25344c9169db1a7b56916434cba8cc26bf&v=4"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Oscar Garcia{" "} 
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" /> @OscarGarcia327
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p> Visca Barca </p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/3oriNVc5SDHOsWcCM8/giphy.gif" alt=" "/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post
