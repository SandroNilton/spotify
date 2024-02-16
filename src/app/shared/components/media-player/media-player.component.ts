import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit{
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b2732d1f4980561c7b2a9920c700',
    album: 'G & A',
    name: 'BEBE (Oficial)',
    duration: 0,
    url: 'track.mp3',
    _id: 1
  }

  constructor() {}

  ngOnInit(): void {}
}
