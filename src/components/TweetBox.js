import React, { useState } from "react";
import "./TweetBox.css";

import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweetHandler = (e) => {
    e.preventDefault();

    // inserting data in firestore
    db.collection('posts').add({
      displayName: "Ruturaj Chaubey",
      username: "raj.chaubey_",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://i1.sndcdn.com/avatars-000340104944-w8pip0-t500x500.jpg",

    });
    
    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i1.sndcdn.com/avatars-000340104944-w8pip0-t500x500.jpg"></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter Image URL"
        />
        <Button onClick={sendTweetHandler} type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
