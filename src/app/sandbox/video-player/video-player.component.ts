import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer', {static: false}) videoplayer!: ElementRef;
  // @ViewChild('volumeChange') volumeChange: ElementRef;
  // @ViewChild('progressChange') progressChange: ElementRef;
  media: any;
  mediaVolume: any;
  mediaProgress: any;
  isPlaying = false;
  mediaEnded = false;
  isMute = false;
  duration = 0;
  currentTimeValue = 0;
  volumeValue = 1;
  fullscreen = false;
  constructor(private  el: ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.media = this.videoplayer.nativeElement;
    // this.mediaVolume = this.volumeChange.nativeElement;
    // this.mediaProgress = this.progressChange.nativeElement;
    // this.mediaDuration = parseInt(this.media.duration);

  }

  mediaDuration(e: any): void{
    this.duration = Math.floor(e.target.duration);
    console.log('buffered: ', this.media.buffered.length);
    console.log('buffered start: ', this.media.buffered.start(0));
    console.log('buffered end: ', this.media.buffered.end(0));
    // this.currentTimeValue = this.currentTime;
    // this.mediaProgress.maxValue = this.duration;

  }

  mediaProgressChange(e: any): void {
    this.currentTimeValue = Math.floor(e.target.currentTime);
    // this.currentTimeValue = this.currentTime;
    // console.log(e.target.currentTime);
    if (this.media.ended) {
      this.mediaEnded = true;
      // console.log('endedd');
    }
  }

  playPause(event: any): void{
    // this.media.ontimeupdate
    // console.log(this.media.ended);
    if (this.media.paused){
      this.media.play();
      this.isPlaying = true;
      this.mediaEnded = false;
    } else if (this.media.ended) {
      this.media.currentTime = 0;
      this.media.play();
      this.mediaEnded = false;
      this.isPlaying = true;
    } else{
      this.media.pause();
      this.isPlaying = false;
    }
  }

  muteUnmute(): void{
    if (this.media.muted){
      this.volumeValue = this.media.volume;
      this.media.muted = false;
      this.isMute = false;
    } else {
      // media.volume = 1;
      this.volumeValue = 0;
      this.media.muted = true;
      this.isMute = true;
    }
  }

  changeVolume(): void{
    console.log('volume: ', this.volumeValue);
    this.media.volume = this.volumeValue;
    this.media.volume === 0 ? this.isMute = true : this.isMute = false;
  }

  changeTime(): void{
    this.media.currentTime = this.currentTimeValue;
    console.log(this.currentTimeValue);
  }

  fullScreen(): void {
    if (!this.fullscreen){
      this.el.nativeElement.requestFullscreen();
      this.fullscreen = true;
    } else {
      document.exitFullscreen();
      this.fullscreen = false;
    }
  }

  pictureInPicture(): void {
    this.media.requestPictureInPicture();
  }

}
