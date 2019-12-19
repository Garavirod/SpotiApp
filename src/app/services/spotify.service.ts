import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Se puede hacer uso en otros servicicios, al ser Injectable
@Injectable({
  providedIn: 'root' //Forma automatica de importar servicios
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      'Authorization': 'Bearer BQASibzyxsbJp8PQzc60TZuJAw4CIdBrgqZVvG311MSmVUwgSuhM2knUCVoZncNq_OH4Sa1MKJYv9EJLHTmcvuSRe3Z-s4Vad27yUg1YT7ZyG1pt5Z2XfkvszpXVmEbM2hxooX-gcg'
    });
    return this.http.get(url,{headers})
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20&offset=5').pipe( map( (data: any) => data.albums.items));
  }

  getArtista(termino: string){
    return this.getQuery(`search?query=${ termino }&type=artist&offset=5&limit=15`).pipe( map ( (data: any) => data.artists.items));
  }
}