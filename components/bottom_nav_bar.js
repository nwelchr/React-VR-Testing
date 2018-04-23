import React from "react";
import { View, Animated, asset, Image, Text } from "react-vr";
import { Easing } from "react-native";

import NavBarItem from "./nav_bar_item.js";

export default class BottomNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "#111",
          opacity: 0.8,
          borderWidth: 0.002,
          borderColor: "#444",
          width: 1.5,
          height: 0.3,
          fontWeight: "400",
          layoutOrigin: [0.5, 0.5],
          textAlign: "center",
          textAlignVertical: "center",
          transform: [{ translate: [0, -1, -1.5] }, { rotateX: "-45deg" }],
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <NavBarItem>Link</NavBarItem>
        <NavBarItem>Link</NavBarItem>
        <NavBarItem>Link</NavBarItem>
      </View>
    );
  }
}
