import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [fillDetails, setFillDetails] = useState(false);

  const sendTweetHandler = (e) => {
    e.preventDefault();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    if (tweetMessage.length == 0){
      alert("Please fill the details");
      setFillDetails(true);
      return;
    }

    // inserting data in firestore
    db.collection("postCollection").add({
      displayName: "Ruturaj Chaubey",
      username: "raj.chaubey_",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://i1.sndcdn.com/avatars-000340104944-w8pip0-t500x500.jpg",
      timestamp: Date.now()
    });

    setTweetMessage("");
    setTweetImage("");
    setFillDetails(false);
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i1.sndcdn.com/avatars-000340104944-w8pip0-t500x500.jpg"></Avatar>
          <input
            class = {fillDetails && 'fill-details-active'}
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
            required
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter Image URL"
        />
        <Button
          onClick={sendTweetHandler}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
