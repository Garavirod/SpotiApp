import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //To know what is the activated route.
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any [] = [];
  isLoading: boolean;

  // We get the param with a active route
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    // Usamos el parametro del url
    this.router.params.subscribe( (params: any) => {
      // console.log(params.id);
      this.getArtista(params.id);
      this.getArtisttracks(params.id);
      console.log(this.getArtisttracks(params.id));
      
      // this.isLoading = true;
    });
  }

  getArtista(id: string) {
    this.isLoading = true;
    this.spotify.getArtista(id).subscribe( artista => {
      console.log(artista);
      this.artista = artista;
      this.isLoading = false;
    });
  }


  getArtisttracks(id: string) {
    this.spotify.getToptracks(id).subscribe( toptracks => {
      this.topTracks = toptracks;
    });
  }
}

// 13y7CgLHjMVRMDqxdx0Xdo