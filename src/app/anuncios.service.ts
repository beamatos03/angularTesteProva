import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncio } from './anuncios';

@Injectable({
  providedIn: 'root'
})

export class AnunciosService {

  url ="http://localhost:3000/anuncios"



  constructor(private http: HttpClient) {}

  getAnuncios(): Observable<Anuncio[]> {

    return this.http.get<Anuncio[]>(this.url);
}



  saveAnuncios(anuncio: Anuncio): Observable<Anuncio>{
    return this.http.post<Anuncio>(this.url, anuncio);
  }
}
