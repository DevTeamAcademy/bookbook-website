import React from 'react';
// icons
import { compose, withState } from 'recompose';
import * as I from '../icons';
import { SocialIconElement, SocialsWrapper } from './ui';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const enhanceLabelIcon = (initialColor) => compose(
  withState('color', 'setColor', initialColor),
);

export const SocialIcon = enhanceLabelIcon('#FBFBFB')((props) => (
  <SocialIconElement
    href={props.link}
    onMouseEnter={() => props.setColor('#9D8C70')}
    onMouseLeave={() => props.setColor('#FBFBFB')}
  >
    {props.iconFunction(props.color)}
  </SocialIconElement>
));

export const socialData = [
  {
    iconFunction: I.instagram,
    link: '#',
  },
  {
    iconFunction: I.youTube,
    link: '#',
  },
  {
    iconFunction: I.facebook,
    link: '#',
  },
];

export const SocialNav = () => (
  <SocialsWrapper>
    {
      socialData.map((icon) => (
        <SocialIcon {...icon} />
      ))
    }
  </SocialsWrapper>
);

export default SocialNav;
