import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import ProfileImage from "./portfolio-icon-removebg-preview.png";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={ProfileImage} />
      </div>
      <div className="post__body">

        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Ruturaj Chaubey{" "}
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" />
                @RChaubey16
              </span>
            </h3>
          </div>

          <div className="post__headerDescription">
            <p>I challenge you to build a twitter clone with React</p>
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVftKQffvvbAwq2WF4zYnouaAYY8YOQac13wFEm9Wj0md88COoUkMeqJXwFqTAIhd6hE&usqp=CAU"
          alt=""
        />
        <div className="post__footer">
            {/* fontSize is built into material-ui */}
             <ChatBubbleOutlineIcon fontSize="small"/>
             <RepeatIcon fontSize="small"/>
             <FavoriteBorderIcon fontSize="small"/>
             <PublishIcon fontSize="small"/>
        </div>
      </div>
    </div>
  );
}

export default Post;
