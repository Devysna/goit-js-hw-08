import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onCurrentTime, 1000));

function onCurrentTime(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
};

player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0)
//    .catch(function(error) {
//    switch (error.name) {
//        case 'RangeError':            
//            break;
//
//        default:            
//            break;
//    }
//});