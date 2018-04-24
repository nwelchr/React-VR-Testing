import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import { Match, Route, MemoryRouter as Router } from 'react-router';

import App from './components/app';
import Gallery from './components/gallery/gallery';
import Gallery2 from './components/gallery/gallery2';
import Gallery3 from './components/gallery/gallery3';
import BottomNavBar from './components/nav_bar/bottom_nav_bar';

export default class ReactVrApp extends React.Component {
  constructor() {
    super();
    this.state = {
      gallery: <Gallery/>
    }

    this.changeGallery = this.changeGallery.bind(this);
  }

  changeGallery(galleryId) {
    let gallery;
    switch(galleryId) {
      case 'gallery1':
        gallery = <Gallery/>;
        break;
      case 'gallery2':
        gallery = <Gallery2/>;
        break;
      case 'gallery3':
        gallery = <Gallery3/>;
        break;
    }

    this.setState({gallery});
    console.log(this.state);
  }

  render() {
    content = [
      {label: 'Home', link: 'gallery1'},
      {label: 'About', link: 'gallery2'},
      {label: 'Gallery', link: 'gallery3'}
    ];

    return (
      <View>
        <Pano source={asset('space.jpg')}/>
        <App>
        {this.state.gallery}
        </App>
        <BottomNavBar 
          content={content}
          changeGallery={this.changeGallery.bind(this)}
          currGallery={this.state.gallery}
          />
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVrApp', () => ReactVrApp);
