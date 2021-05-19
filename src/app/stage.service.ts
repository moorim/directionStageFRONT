import { Injectable } from '@angular/core';
import { Stage }  from './stage'
import { Observable,of} from 'rxjs'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { catchError,map,tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StageService {
  private StageUrl = 'http://localhost:8080/stages';
  
  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };

  constructor( 
    private http : HttpClient
    ) { }

  
  getStage(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.StageUrl);
  }
 
   
  getOne(id:Number): Observable<Stage> {
    const url=`${this.StageUrl}/${id}`;
    return this.http.get<Stage>(url);

  }

  
  updateStage(Stage:Stage):Observable<any>{
    const url=`${this.StageUrl}/${Stage.id_stage}`
    return this.http.put(url,Stage);
  }
  saveStage(Stage:Stage){
    return this.http.post(this.StageUrl,Stage);
  }
  deleteStage(id :number):Observable<Stage>{
    const url=`${this.StageUrl}/${id}`;
    return this.http.delete<Stage>(url,this.httpOption);
  }
  searchStage(term: string): Observable<Stage[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Stage[]>(`${this.StageUrl}/?name=${term}`);
  }
  countStages():Observable<number>{
    return this.http.get<number>("http://localhost:8080/countstages")
    
  }
}
