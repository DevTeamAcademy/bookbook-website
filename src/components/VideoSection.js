import React from 'react';
// components
import { VideoWrapper, UnderLine } from './ui';
// /////////////////////////////////////////////////////////////////
import { Video } from '../ui/index';
// TODO: use Title component when it will be ready
export const VideoSection = () => (
  <VideoWrapper
    pt='37px'
    bg='#363135'
    display='flex'
    color='#FBFBFB'
    fontSize='26px'
    alignItems='center'
    flexDirection='column'
  >
    <p> Checkout Our Demo </p>
    <UnderLine />
    <Video
      py='30px'
      px='35px'
      width='100%'
      bg='#363135'
      height='100%'
      controls='controls'
      borderRadius='50px'
    >
      <source src='./static/video.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      <track
        default
        kind='captions'
        srcLang='en'
      />
    </Video>
  </VideoWrapper>
);

export default VideoSection;
