import React, { Component } from "react";

export default class OpenViduVideoComponent extends Component {
  constructor(props) {
    super(props);
    // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.videoRef = React.createRef();
  }

  componentDidUpdate(props) {
    if (props && !!this.videoRef) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
      if(!this.source) {
        console.log('updated');
        this.connect();
      }
    }
  }

  connect(){
    this.source = this.audioCtx.createMediaElementSource(this.videoRef.current);
    const gainNode = this.audioCtx.createGain();
    this.source.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);
    console.log(this.audioCtx.destination);
    // mute
    gainNode.gain.value = 0;
  }

  componentDidMount() {
    if (this.props && !!this.videoRef) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
      console.log(this.videoRef.current);
      if(!this.source) {
        console.log('mounted');
        this.connect()
      }
    }
  }

  render() {
    return <video autoPlay={true} ref={this.videoRef} />;
  }
}
