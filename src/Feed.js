import React from 'react'
import TweetBox from './Tweetbox';
import Post from "./Post";
import "./Feed.css";

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
            <h2>Home</h2>
            </div>

            {/* Tweetbox */}
            <TweetBox />

            {/* Posts */}
            <Post />
        </div>
    )
}

export default Feed;
