import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

import ProfileImage from "./portfolio-icon-removebg-preview.png";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={ProfileImage}></Avatar>
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter Image URL"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
