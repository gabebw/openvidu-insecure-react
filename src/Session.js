import React from "react";
import UserVideoComponent from "./UserVideoComponent";

const Session = ({
  mySessionId,
  mainStreamManager,
  handleChangeUserName,
  handleChangeSessionId,
  leaveSession,
  publisher,
  subscribers
}) => {
  return (
    <div id="session">
      <div id="session-header">
        <h1 id="session-title">{mySessionId}</h1>
        <input
          className="btn btn-large btn-danger"
          type="button"
          id="buttonLeaveSession"
          onClick={leaveSession}
          value="Leave session"
        />
      </div>

      {mainStreamManager !== undefined ? (
        <div id="main-video" className="col-md-6">
          <UserVideoComponent streamManager={mainStreamManager} />
        </div>
      ) : null}
      <div id="video-container" className="col-md-6">
        {publisher !== undefined ? (
          <div
            className="stream-container col-md-6 col-xs-6"
            onClick={() => this.handleMainVideoStream(publisher)}
          >
            <UserVideoComponent streamManager={publisher} />
          </div>
        ) : null}
        {subscribers.map((sub, i) => (
          <div
            key={i}
            className="stream-container col-md-6 col-xs-6"
            onClick={() => this.handleMainVideoStream(sub)}
          >
            <UserVideoComponent streamManager={sub} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Session;
