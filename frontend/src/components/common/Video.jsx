import React from 'react';
import blurs from '../../assets/img/video-background.png'
import video from '../../assets/img/video.png'
import icon from '../../assets/img/play-button.svg'

function Video() {
  return (
    <>
    <section class="main-3">
        <div class="blur-1">
            <img src={blurs} class="blur-image" alt=""/>
            <div class="shade"></div>
            <h5>Discover</h5>
            <p>Watch Our Video Tour</p>
            <img src={video} class="blur-header-background"alt=""/>
            <img src={icon} class="blur-icon-background-1"alt=""/>
        </div>
    </section>
    </>
  );
}

export default Video;
