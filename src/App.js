import React, { Component } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

// Amplify
import { withAuthenticator } from "aws-amplify-react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <>
        <VideoPlayer videoUrl="https://fea3c903eeea.us-east-1.playback.live-video.net/api/video/v1/us-east-1.681707848755.channel.T7ltR8LDKtDw.m3u8" />
      </>
    );
  }
}

export default withAuthenticator(App, true);
