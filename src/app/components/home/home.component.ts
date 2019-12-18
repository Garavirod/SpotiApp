import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  paises: any[] = [];
  constructor(private http: HttpClient) {  
    console.log('Constructor inizializaed');
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((res: any) =>{
      this.paises = res;
      console.log(this.paises);
    });
  }

  ngOnInit() {
  }

}
