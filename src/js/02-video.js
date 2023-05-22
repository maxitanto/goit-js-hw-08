import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const KEY_CURRENT_TIME = 'videoplayer-current-time';
const currentTime = localStorage.getItem(KEY_CURRENT_TIME);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(KEY_CURRENT_TIME, seconds);
}

player.setCurrentTime(currentTime);
