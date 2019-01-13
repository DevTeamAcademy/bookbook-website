import React from 'react';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const SocialNav = () => (
  <nav>
    <fragment>
      <a href='#'>   <img src='./static/fb.png' alt='facebook' filter='invert(100%)' />   </a>
      <a href='#'>   <img src='./static/social.png' alt='twetter' />  </a>
      <a href='#'>   <img src='./static/vk.png' alt='vkontakte' />   </a>
    </fragment>
    <style>
      {`
    img {
        max-width: 100%;
        filter: invert(100%);
    }

    fragment {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;   
        padding: 25px;
    }

    a {
        width: 52px;
        height: 52px;
        margin-right: 26px;
    }
    `}
    </style>
  </nav>
);

export default SocialNav;
