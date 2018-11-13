export default () => {
    var video1 = document.getElementById('video-1');
    var video2 = document.getElementById('video-2');
    var video3 = document.getElementById('video-3');
    var video4 = document.getElementById('video-4');

    var brightness = document.getElementById('brightness');
    var contrast = document.getElementById('contrast');

    var modal = document.getElementById('myModal');
    var modalVideo = document.getElementById("modal-video");
    var close = document.getElementsByClassName("Modal-Close")[0];

    video1.addEventListener('click', videoClickHandler);
    video2.addEventListener('click', videoClickHandler);
    video3.addEventListener('click', videoClickHandler);
    video4.addEventListener('click', videoClickHandler);


    function videoClickHandler(e) {

        if (document.getElementsByClassName('Modal')[0].style.display === 'block') return;
        var videoParent = e.target.parentElement;
        e.preventDefault();
        modalVideo.appendChild(e.target);
        e.target.play();
        e.target.muted = false;
        modal.style.display = "block";

        var currentStyle = e.target.style.filter.match(/\w+-?[\d+\.]*/g);
        resetInputs(currentStyle, brightness, contrast);

        brightness.oninput = function(ev) {
            filterVideo(ev.target.value, 'brightness', e.target);
        };

        contrast.oninput = function(ev) {
            filterVideo(ev.target.value, 'contrast', e.target);
        };

        close.onclick = function() {
            modal.style.display = "none";
            videoParent.appendChild(e.target);
            e.target.muted = true;
            e.target.play();
        }
    }

    function resetInputs(currentStyle, brightness, contrast) {
        if (currentStyle) {
            if (currentStyle.indexOf('brightness') > -1)
                brightness.value = currentStyle[currentStyle.indexOf('brightness') + 1];
            if (currentStyle.indexOf('contrast') > -1)
                contrast.value = currentStyle[currentStyle.indexOf('contrast') + 1];
        } else {
            brightness.value = 1;
            contrast.value = 1;
        }
    }

    function filterVideo(value, type, element) {
        var currentStyle = element.style.filter.match(/\w+-?[\d+\.]*/g);
        if (currentStyle && currentStyle.indexOf(type) > -1) {
            const index = currentStyle.indexOf(type);
            const prev = currentStyle[index + 1];
            element.style.filter = element.style.filter.replace(`${type}(${prev})`, `${type}(${value})`);
        } else element.style.filter += `${type}(${value})`;
    }
}