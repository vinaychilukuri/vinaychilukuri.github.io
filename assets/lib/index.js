$(document).ready(function(){
    const prototype_section = document.querySelector('#prototyping--testing');
    const prototype_video = document.querySelector('video');

    console.log('JS file loaded!');

    if (prototype_section){
        let video_isPlaying = false;
        window.onscroll = function(){
            if ((window.scrollY >= prototype_section.offsetTop-500) && (window.scrollY <= prototype_section.offsetTop+500)){
                if (!video_isPlaying){
                    prototype_video.play();
                    video_isPlaying = true;
                }
            }
            else{
                if (video_isPlaying){
                    prototype_video.pause();
                    video_isPlaying = false;
                }
            }
        }
    }
});