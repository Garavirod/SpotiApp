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
      'Authorization': 'Bearer BQDgygY8Mlvya50tgTU1HNcLPVWxO-9IEOhgozfgCI09uufx5muMSTirUAJpjvBehZxTTvVNTGhDe2Ec9lybxRNYw3tvx4uKhxIIRBbi7DA1Sb9f-iJFe8_CFk8CWQPcXwb5ASUoHg'
    });
    return this.http.get(url, { headers } );
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20&offset=5').pipe( map( (data: any) => data.albums.items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?query=${ termino }&type=artist&offset=5&limit=15`).pipe( map ( (data: any) => data.artists.items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`); //.pipe( map ( (data: any) => data.artists.items));
  }


  getToptracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`); //.pipe( map ( (data: any) => data.artists.items));
  }
}