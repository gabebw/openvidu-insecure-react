import React, { Component } from "react";

export default class OpenViduVideoComponent extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();

    // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.gainNode = audioCtx.createGain();
    this.gainNode.connect(audioCtx.destination);
    // mute
    this.gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  }

  componentDidUpdate(props) {
    if (props && !!this.videoRef) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
    }
  }

  connect() {
    const source = this.audioCtx.createMediaElementSource(
      this.videoRef.current
    );
    source.connect(this.gainNode);
  }

  componentDidMount() {
    if (this.props && !!this.videoRef) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
      if (!this.source) {
        this.connect();
      }
    }
  }

  render() {
    return <video autoPlay={true} ref={this.videoRef} />;
  }
}
