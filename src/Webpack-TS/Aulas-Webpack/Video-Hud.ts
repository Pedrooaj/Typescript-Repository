
interface PlayerElements {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
}

interface Actions {
    playToggle(): void;
    stopToggle(): void;
    startEvent(): void;
}

export default class VideoPlayer implements Actions {
    private videoPlayer: HTMLVideoElement;
    private playButton: HTMLButtonElement;
    private stopButton: HTMLButtonElement;

    constructor(playerElements: PlayerElements){
        this.videoPlayer = playerElements.videoPlayer;
        this.stopButton = playerElements.stopButton;
        this.playButton = playerElements.playButton;
    }
    
    playToggle(): void {
        if(this.videoPlayer.paused){
            this.videoPlayer.play();
            this.playButton.innerHTML = 'Pause';
        }else{
            this.videoPlayer.pause();
            this.playButton.innerHTML = 'Play';
        }

    }
    stopToggle(): void {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = 'Play';
    }
    startEvent(): void {
        
        this.playButton.addEventListener('click', () => {
           this.playToggle();
        })

        this.stopButton.addEventListener('click', () => {
            this.stopToggle();
        })
        
    }
}

const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector(".video") as HTMLVideoElement,
    playButton: document.querySelector(".play") as HTMLButtonElement,
    stopButton: document.querySelector(".stop") as HTMLButtonElement 
})

videoPlayer.startEvent();