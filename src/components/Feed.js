import React, { useEffect, useState } from "react";
import "./Feed.css";

import Post from "./Post";
import TweetBox from "./TweetBox";

import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  // is a piece of code that runs based on a given condition.
  // Will run when the feed component loads and don't run after
  //   Will also run again when the parameter passed to is changes, so here when the state array[] changes
  useEffect(() => {
      
    // Reading data from firestore
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
