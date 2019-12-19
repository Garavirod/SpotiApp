import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  // We get the param with a active route
  constructor(private router: ActivatedRoute) { 
    this.router.params.subscribe( params => {
      console.log(params[' id '] );
    });
  }
}
