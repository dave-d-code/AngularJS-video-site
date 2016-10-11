// basic js file for video control setup.
// doesn't work with Jquery selectors, as you need to go thru the DOM.

var myVideo = document.getElementById('myvideo');

function playVideo() {
	myVideo.play();
}

function pauseVideo() {
	myVideo.pause();
}

function stopVideo() {
	myVideo.pause();
	myVideo.currentTime = 0;
}