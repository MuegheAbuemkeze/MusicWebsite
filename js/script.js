const mySong = document.getElementById("mySong");
const icon = document.getElementById("icon");


const playSong = () => {
    if (mySong) {
        mySong.play();
        icon.src = "assets/pause.png";
    }
}

const pauseSong = () => {
    if (!mySong) {
        mySong.paused();
        icon.src = "assets/play.png";
    }

}