import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any [] = [];
  isLoading: boolean;

  constructor(private spotify: SpotifyService) {
    this.isLoading = true;
    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.isLoading = false;
    });
  }

  ngOnInit() {
  }

}
