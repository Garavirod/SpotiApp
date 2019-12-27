import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { log } from 'util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any [] = [];
  isLoading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private spotify: SpotifyService) {
    this.isLoading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.isLoading = false;
      // Todo lo que ocurre con éxito pasa en este bloque
    // ------------------------------
    }, ( errorDeServicio ) => { //cuando hay un error en el servicio
        this.error = true;
        this.isLoading = false;
        this.errorMessage = errorDeServicio.error.error.message;
    });
  }

  ngOnInit() {
  }

}
