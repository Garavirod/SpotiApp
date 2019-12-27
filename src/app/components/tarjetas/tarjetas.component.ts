import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; //Using always you want redirect any site

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any [] = [];

  // With this o the constructor, I have already all to do redirections
  constructor( private router: Router) {}

  ngOnInit() {
  }

  verArtista( item: any ) {
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    // console.log(artistaId);
    // The reaseon why this sintax '[]' it is because we'll use a parameter in url
    this.router.navigate(['/artist', artistaId]);
  }

}
