import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import App from './components/app';
import Gallery from './components/gallery/gallery';
import BottomNavBar from './components/nav_bar/bottom_nav_bar';

export default class ReactVrApp extends React.Component {
  render() {
    content = [
      {label: 'Home', link: '/home'},
      {label: 'About', link: '/about'},
      {label: 'Gallery', link: '/gallery'}
    ]

    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <App>
          <Gallery />
        </App>
        <BottomNavBar content={content}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVrApp', () => ReactVrApp);
