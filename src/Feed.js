import React, {useState} from 'react'
import TweetBox from './Tweetbox';
import Post from "./Post";
import "./Feed.css";

function Feed() {
    const [posts, setPosts] = useState([]);
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
            <h2>Home</h2>
            </div>

            {/* Tweetbox */}
            <TweetBox />

            {/* Posts */}
            <Post displayName="Oscar Garcia"
             username="OscarGarcia327"
            verified text="this is working"
            avatar="https://avatars2.githubusercontent.com/u/66390177?s=460&u=07504b25344c9169db1a7b56916434cba8cc26bf&v=4" 
            image="https://media.giphy.com/media/3oriNVc5SDHOsWcCM8/giphy.gif"
            />

        </div>
    )
}

export default Feed;
