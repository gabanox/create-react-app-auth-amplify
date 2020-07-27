import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    <VideoPlayer videoUrl="https://fea3c903eeea.us-east-1.playback.live-video.net/api/video/v1/us-east-1.681707848755.channel.VRX6qzjSZtK3.m3u8" />
  }
}

export default withAuthenticator(App, true);
