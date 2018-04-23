import React, { Component } from "react";
import { asset, Animated, Text } from "react-vr";

export default class NavBarItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        backgroundColor: '#222',
        opacity: '.8',
        fontSize: '.1'
    }
  }

  handleEnter(e) {
    this.setState({
        backgroundColor: '#444',
        opacity: '.9',
        fontSize: '.11'
    });
  }

  handleExit(e) {
    this.setState({
        backgroundColor: '#222',
        opacity: '.8',
        fontSize: '.1'
    });
  }

  render() {

    const { backgroundColor, opacity, fontSize } = this.state;

    return (
      <Text
        style={{
          flex: 1,
          backgroundColor,
          opacity,
          fontSize,
          color: "#FFF",
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
