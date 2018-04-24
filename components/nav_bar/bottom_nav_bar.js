import React from "react";
import { View, Animated, asset, Image, Text, VrButton } from "react-vr";
import { Easing } from "react-native";

import { NavLink } from 'react-router-dom';

import NavBarItem from "./nav_bar_item.js";


export default class BottomNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content, changeGallery, currGallery } = this.props;

    // console.log(currGallery.type.name.toLowercase());

    return (
      <View
        style={{
          backgroundColor: "#111",
          opacity: 0.8,
          borderWidth: 0.002,
          borderColor: "#444",
          width: 1.5,
          height: 0.3,
          layoutOrigin: [0.5, 0.5],
          transform: [{ translate: [0, -1, -1.5] }, { rotateX: "-45deg" }],
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        {content.map((el, idx) => (
        <NavBarItem changeGallery={changeGallery} link={el.link} key={idx}>
            {el.label}
          </NavBarItem>)
        )}
      </View>
    );
  }
}
