import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Se puede hacer uso en otros servicicios, al ser Injectable
@Injectable({
  providedIn: 'root' //Forma automatica de importar servicios
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      'Authorization': 'Bearer BQCbxBXTJ8ICdADOqlp2UcvYghNVUrleJLVUiqbwS0hejPgZf5UhyfVO4Qu3bW9S1FvT_38v4akfdU06q8xzV2XigWmMmaJV9dgn_pepCahTQDQ7zErZ9MekZJEZSVoIlDZgJg_ByA'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      'Authorization': 'Bearer BQD8nZlZKBP3JIvI22Ifnc_8bsfEUauRsmEdWx42ek1gBjNFvIeIi8Q7FMo4IcifExOccyPLnubIP68jaWnI5DIftPHiz-oUDPe5g-EeglpExFabBsDgJ2kBATl8_MxPvexEV5mOHA'
    });
    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=5&limit=15`, { headers });
  }
}