import React, { Component } from "react";

export default class OpenViduVideoComponent extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidUpdate(props) {
    if (props && !!this.videoRef) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
    }
  }

  componentDidMount() {
    if (this.props && !!this.videoRef) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
    }
  }

  render() {
    // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    return <video autoPlay={true} ref={this.videoRef} />;
  }
}
