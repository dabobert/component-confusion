// [vidstack] `useMediaState` requires `RefObject<MediaPlayerInstance>` argument if called outside the `<MediaPlayer>` component
// useMediaState` requires `RefObject<MediaPlayerInstance>` argument if called outside the `<MediaPlayer>` component 


import React, { useEffect } from 'react';
import {
  useMediaPlayer, useMediaStore, MediaPlayer, useMediaRemote, MediaPlayerInstance,
  useMediaState,
  type MediaRemoteControl 
} from '@vidstack/react';

export const Thing = () => {
  const remote = useMediaRemote(); // https://www.vidstack.io/docs/player/api/classes/media-remote-control?styling=default-theme
  const player = React.useRef<MediaPlayerInstance>(null);

  useEffect(() => {
    console.log("remote", remote);
    console.log("player", player);
    console.log("rg", remote.getPlayer());
  });
  // const isPaused = useMediaState('paused');
  // console.log("player", player);
  // console.log("rg", remote.getPlayer());
  function handeClick() {
    console.log("clicked");
    console.log("remote", remote);
    console.log("player", player);
    console.log("rg", remote.getPlayer());
  }

  return <h1 onClick={handeClick}>Thing</h1>;
}