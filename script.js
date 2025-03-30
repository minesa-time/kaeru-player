(function () {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
})();

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        videoId: "rGtf0LTlLr0",
        playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 0,
            playsinline: 1,
            showinfo: 0,
            rel: 0,
        },
        events: {
            onReady: () => setTimeout(updateButton, 200),
        },
    });
}

function toggleAudio() {
    if (!player) return;

    const icon = document.getElementById("playPauseIcon");
    if (!icon) return;

    const isPlaying = player.getPlayerState() === 1;
    isPlaying ? player.pauseVideo() : player.playVideo();
    icon.src = `./assets/${isPlaying ? "play" : "pause"}.svg`;
}

function updateButton() {
    const icon = document.getElementById("playPauseIcon");
    if (icon) {
        icon.src = `./assets/${
            player.getPlayerState() === 1 ? "pause" : "play"
        }.svg`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const playPauseBtn = document.getElementById("playPauseBtn");
    if (playPauseBtn) {
        playPauseBtn.addEventListener("click", toggleAudio);
    }
});
