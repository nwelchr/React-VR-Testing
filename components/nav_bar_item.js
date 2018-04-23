import React, { Component } from "react";
import { asset, Animated, Text } from "react-vr";

export default class NavBarItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        backgroundColor: '#333',
        opacity: '.7'
    }
  }

  handleEnter(e) {
    this.setState({
        backgroundColor: '#555',
        opacity: '.9',
    });
  }

  handleExit(e) {
    this.setState({
        backgroundColor: '#333',
        opacity: '.7',
    });
  }

  render() {

    const { backgroundColor } = this.state;

    return (
      <Text
        style={{
          flex: 1,
          backgroundColor,
          opacity: .5,
          color: "#FFF",
          fontSize: .1,
          textAlign: "center",
          textAlignVertical: "center",
          height: '100%',
          margin: .01,
        }}
        onEnter={this.handleEnter.bind(this)}
        onExit={this.handleExit.bind(this)}
        >
        {this.props.children || this.props.text}
      </Text>
    );
  }
}
