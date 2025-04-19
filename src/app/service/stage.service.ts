import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stage } from 'src/core/models/Stage';
@Injectable({
  providedIn: 'root'
})
export class StageService {
  deleteResidence(id: any) : Observable<Stage>{
    return this.http.delete<Stage>(this.urlStage+'/'+id)
  }


  urlStage ='http://localhost:3000/Stage'
  constructor(private http:HttpClient) { }




  getStage(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.urlStage)
  }
  
  addStage(stage:Stage): Observable<Stage> {
    return this.http.post<Stage>(this.urlStage,stage)
  }




}



  

 
/* 
 
  getByIdResidence(id:any): Observable<Residence> {
    return this.http.get<Residence>(this.urlStage+'/'+id)
  }

  

  deleteResidence(id:any): Observable<Residence> {
    return this.http.delete<Residence>(this.urlStage+'/'+id)
  }
  updateResidence(id:any,res:Residence): Observable<Residence> {
    return this.http.put<Residence>(this.urlStage+'/'+id,res)
  }
}
 */