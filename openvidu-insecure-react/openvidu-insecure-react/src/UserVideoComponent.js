import React, { Component } from "react";
import OpenViduVideoComponent from "./OvVideo";
import "./UserVideo.css";

const UserVideoComponent = ({ streamManager }) => {
  const nickname = JSON.parse(streamManager.stream.connection.data).clientData;

  if (streamManager === undefined) {
    return <div />;
  } else {
    return (
      <div>
        <div className="streamcomponent">
          <OpenViduVideoComponent streamManager={streamManager} />
          <div>
            <p>{nickname}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default UserVideoComponent;
