import React from 'react';
import { compose, withState } from 'recompose';
// helpers
import { genShortId } from '../helpers';
// icons
import * as I from '../icons';
// components
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
        <SocialIcon {...icon} key={genShortId()} />
      ))
    }
  </SocialsWrapper>
);

export default SocialNav;
