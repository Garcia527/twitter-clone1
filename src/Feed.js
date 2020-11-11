import React, {useState, useEffect} from 'react'
import TweetBox from './Tweetbox';
import Post from "./Post";
import "./Feed.css";
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
            ))
    }, []);


    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
            <h2>Home</h2>
            </div>

            {/* Tweetbox */}
            <TweetBox />

            {posts.map(post => (
            <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified} 
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
            ))}

            {/* Posts */}
            {/* <Post displayName="Oscar Garcia"
             username="OscarGarcia327"
            verified text="this is working"
            avatar="https://avatars2.githubusercontent.com/u/66390177?s=460&u=07504b25344c9169db1a7b56916434cba8cc26bf&v=4" 
            image="https://media.giphy.com/media/3oriNVc5SDHOsWcCM8/giphy.gif"
            /> */}

        </div>
    )
}

export default Feed;
