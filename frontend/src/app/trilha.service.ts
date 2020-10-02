import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TrilhaService {
 
  TrilhaUrl = ''

  constructor( private http: HttpClient ) { }

  


}
