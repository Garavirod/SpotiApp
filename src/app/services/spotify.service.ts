import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Se puede hacer uso en otros servicicios, al ser Injectable
@Injectable({
  providedIn: 'root' //Forma automatica de importar servicios
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      'Authorization': 'Bearer BQB9ekrqFm1aXvqmo2HMIG4Qs3piUHAeCmZZ4f0sVMAJFvNBhHpAES038iZhCybIh8LhhUnl5OZcD2T06nxnmCZO-ZKaIUYPYKvf2vlfyGP682PdG_YV1s0fE-m8pJvQ7TCkcBU89w'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
            .pipe( map( (data: any) => data.albums.items));
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      'Authorization': 'Bearer BQD8nZlZKBP3JIvI22Ifnc_8bsfEUauRsmEdWx42ek1gBjNFvIeIi8Q7FMo4IcifExOccyPLnubIP68jaWnI5DIftPHiz-oUDPe5g-EeglpExFabBsDgJ2kBATl8_MxPvexEV5mOHA'
    });
    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=5&limit=15`, { headers })
          .pipe( map ( (data: any) => data.artists.items));
  }
}