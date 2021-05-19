import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Admin } from './admin';
import { Observable,of} from 'rxjs'
import { catchError,map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private adminUrl='http://localhost:8080/admins'
  admins:Admin[]=[];
  
  constructor( private http :HttpClient) { }

  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.adminUrl).pipe(
      catchError(this.handleError<Admin[]>('getAdmins',[]))
    );
    
  }
  private handleError<T>(operation = 'operation',result?:T){
    return (error:any):Observable<T> => {
      console.error(error);
      return of(result as T);}
    }
  
  
}
