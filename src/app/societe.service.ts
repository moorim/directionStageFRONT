import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Societe } from './societe';
import { Observable,of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  private SocieteUrl = 'http://localhost:8080/societes';

  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };
  
  constructor( 
    private http : HttpClient
    ) { }
    getSociete(): Observable<Societe[]> {
      return this.http.get<Societe[]>(this.SocieteUrl);

    }
    
   
     
    getOne(rais_soc:Number): Observable<Societe> {
      const url=`${this.SocieteUrl}/${rais_soc}`;
      return this.http.get<Societe>(url);
  
    }
  
    
    updateSociete(societe:Societe):Observable<any>{
      const url=`${this.SocieteUrl}/${societe.rais_soc}`
      return this.http.put(url,societe);
    }
    saveSociete(societe:Societe){
      return this.http.post(this.SocieteUrl,societe);
    }
    
  }