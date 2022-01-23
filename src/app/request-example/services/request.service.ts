import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://rickandmortyapi.com/api/'
const characterUrl = baseUrl + 'character';
const locationURL = baseUrl + 'location'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  getCharacters():Observable<any> {
    return this.httpClient.get(characterUrl)
  }

  getLocations():Observable<any> {
    return this.httpClient.get(locationURL)
  }
}




