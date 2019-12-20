import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  artistas: any [] = [];
  isLoading: boolean;
  constructor(private spotify: SpotifyService) { }
  buscar(termino: string) {
    this.isLoading = true;
    this.spotify.getArtistas(termino).subscribe( (data: any) => {
      this.artistas = data;
      this.isLoading = false;
    });
  }

}
