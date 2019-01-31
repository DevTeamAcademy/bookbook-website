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
    key: {genShortId()},
    link: '#',
  },
  {
    iconFunction: I.youTube,
    key: {genShortId()},
    link: '#',
  },
  {
    iconFunction: I.facebook,
    key: {genShortId()},
    link: '#',
  },
];

export const SocialNav = () => (
  <SocialsWrapper>
    {
      socialData.map((icon) => (
        <SocialIcon {...icon} key={icon.key} />
      ))
    }
  </SocialsWrapper>
);

export default SocialNav;
