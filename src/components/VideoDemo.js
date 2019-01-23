import React from 'react';
// /////////////////////////////////////////////////////////////////
import { OurDemo, UnderLine, OnlyVideoStyle } from './ui';
// /////////////////////////////////////////////////////////////////
export const VideoSection = () => (
  <OurDemo>
    <p> Checkout Our Demo </p>
    <UnderLine />
    <OnlyVideo />
  </OurDemo>
);
// /////////////////////////////////////////////////////////////////
export const OnlyVideo = () => (
  <fragment>
    <OnlyVideoStyle>
      <video
        width='90%'
        height='100%'
        autoPlay='autoplay'
        controls='controls'
      >
        <source src='./static/video.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        <track
          default
          kind='captions'
          srcLang='en'
        />
      </video>
    </OnlyVideoStyle>
  </fragment>
);

export default VideoSection;
