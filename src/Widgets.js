import React from "react";
import "./Widgets.css";
import {
    TwitterTimelineEmbed, 
    TwitterShareButton,
    TwitterTweetEmbed, 
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetsContainer">
            <h2>Whats good</h2>

            <TwitterTweetEmbed tweetId={"1325493014941216768"} />

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="miranduhgarcia"
                options={{ height: 400}}
                />

            <TwitterShareButton 
                url={"https://twitter.com/OscarGarcia327"}
                options={{text: "react is awesome", via: "OscarGarcia"}}
            />
            </div>
        </div>
    );
}

export default Widgets
