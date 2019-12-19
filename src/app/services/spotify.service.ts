import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Se puede hacer uso en otros servicicios, al ser Injectable
@Injectable({
  providedIn: 'root' //Forma automatica de importar servicios
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDRiNyEI8n4lpEquPpH8kZAxN5rLnyiW5HcVGBwns10Ol3wvj8v6idxyeGD5CjOYcK_UU74PdLJZiDStZJkvnwx4A6zlDVKLC_eUr70I4X-87XEIpIZcIN-Ilc_poY5dC6RJR3stA'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).subscribe(data => {
      console.log(data);
    });
  }
}
