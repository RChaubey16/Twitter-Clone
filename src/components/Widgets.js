import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import { Timeline, Tweet } from "react-twitter-widgets";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twiiter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <Tweet tweetId="1502585334793932801" />

        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "elonmusk",
          }}
          options={{
            height: "400",
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
