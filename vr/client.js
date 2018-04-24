
// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"
const GearVRRaycaster = {
  getType: () => "Gear VR",
  getRayOrigin: () => [0, 0, 0],
  getRayDirection: () => [0, 0, -1],
  drawsCursor: () => true
};


// Auto-generated content.

import { VRInstance } from 'react-vr-web';
// import { isMobile } from 'react-device-detect';

function init(bundle, parent, options) {
  let vr;

  // console.log(isMobile)

  // const gearVr = AFRAME.utils.device.isGearVR();

  // if (gearVr) {
    vr = new VRInstance(bundle, 'ReactVrApp', parent, {
      // Add custom options here
      // raycasters: [
      //   GearVRRaycaster
      // ],
      cursorVisibility: 'visible',
      ...options,
    });
  // } else {
  //    vr = new VRInstance(bundle, 'ReactVrApp', parent, {
  //     // Add custom options here
  //     ...options,
  //   });
  // }

  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
