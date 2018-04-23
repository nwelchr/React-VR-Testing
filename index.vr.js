import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import App from './components/app';
import Gallery from './components/gallery';
import BottomNavBar from './components/bottom_nav_bar'

export default class ReactVrApp extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <App>
          <View style={{layoutOrigin: [-.5, 0]}} >
          <Gallery />
          </View>
        </App>
        <BottomNavBar />
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVrApp', () => ReactVrApp);
