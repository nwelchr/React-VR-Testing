import React, { Component } from "react";
import { asset, Animated, Text } from "react-vr";

import GazeButton from '../button/gaze_button';

export default class NavBarItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        backgroundColor: '#222',
        opacity: .8,
        fontSize: .1
    }
  }

  handleHover(e) {
    this.setState({
        backgroundColor: '#333',
        opacity: .85,
        fontSize: .1
    });
  }

  handleLeave(e) {
    this.setState({
        backgroundColor: '#222',
        opacity: .8,
        fontSize: .1
    });
  }

  handleTrigger() {
    this.setState({
      backgroundColor: '#444',
      opacity: .9,
      fontSize: .11
  });
  }

  render() {

    const { backgroundColor, opacity, fontSize } = this.state;

    return (
      <GazeButton
        style={{
          flex: 1,
          backgroundColor,
          opacity,
          height: '100%',
          margin: .01,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onHover={this.handleHover.bind(this)}
        onTrigger={this.handleTrigger.bind(this)}
        onLeave={this.handleLeave.bind(this)}
        >
        <Text style={{
          fontSize,
          color: "#FFF",
        }}>
        {this.props.children}
        </Text>
      </GazeButton>
    );
  }
}
