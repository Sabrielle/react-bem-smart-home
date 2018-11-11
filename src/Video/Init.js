import Hls from 'hls.js';

const videos = [
    'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fsosed%2Fmaster.m3u8',
    'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fcat%2Fmaster.m3u8',
    'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fdog%2Fmaster.m3u8',
    'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fhall%2Fmaster.m3u8'
];

export default function initVideo(video, url) {
	if (Hls.isSupported()) {
		var hls = new Hls();
		hls.loadSource(videos[url - 1]);
		hls.attachMedia(video);
		hls.on(Hls.Events.MANIFEST_PARSED, function() {
			video.play();
		});
	} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
		video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
		video.addEventListener('loadedmetadata', function() {
			video.play();
		});
	}
}