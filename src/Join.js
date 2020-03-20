import React from "react";

const Join = ({
  myUserName,
  handleChangeUserName,
  mySessionId,
  handleChangeSessionId,
  joinSession
}) => {
  return (
    <div id="join">
      <div id="join-dialog" className="jumbotron vertical-center">
        <h1> Join a video session </h1>
        <form className="form-group" onSubmit={joinSession}>
          <p>
            <label>Participant: </label>
            <input
              className="form-control"
              type="text"
              id="userName"
              value={myUserName}
              onChange={handleChangeUserName}
              required
            />
          </p>
          <p>
            <label> Session: </label>
            <input
              className="form-control"
              type="text"
              id="sessionId"
              value={mySessionId}
              onChange={handleChangeSessionId}
              required
            />
          </p>
          <p className="text-center">
            <input
              className="btn btn-lg btn-success"
              name="commit"
              type="submit"
              value="JOIN"
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Join;
