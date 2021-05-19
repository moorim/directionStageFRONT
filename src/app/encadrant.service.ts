import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Encadrant} from './encadrant'
@Injectable({
  providedIn: 'root'
})
export class EncadrantService {

  private StageUrl = 'http://localhost:8080/encadrants';
  
  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };

  constructor( 
    private http : HttpClient
    ) { }

  
  getStage(): Observable<Encadrant[]> {
    return this.http.get<Encadrant[]>(this.StageUrl);
  }
 
   
  getOne(id:Number): Observable<Encadrant> {
    const url=`${this.StageUrl}/${id}`;
    return this.http.get<Encadrant>(url);

  }

  
  updateEncadrant(Stage:Encadrant):Observable<any>{
    const url=`${this.StageUrl}/${Stage.id}`
    return this.http.put(url,Stage);
  }
  saveEncadrant(Stage:Encadrant){
    return this.http.post(this.StageUrl,Stage);
  }
  deleteEncadrant(id :number):Observable<Encadrant>{
    const url=`${this.StageUrl}/${id}`;
    return this.http.delete<Encadrant>(url,this.httpOption);
  }
  searchEncadrant(term: string): Observable<Encadrant[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Encadrant[]>(`${this.StageUrl}/?name=${term}`);
  }
  
}



