import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  isLoading: boolean;

  // We get the param with a active route
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    // Usamos el parametro del url
    this.router.params.subscribe( params => {
      this.getArtista(params[' id ']);
      this.isLoading = true;
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
}
