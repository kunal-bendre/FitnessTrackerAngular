import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

const httpheaders = {
   headers : new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http:HttpClient) { }

  getActivities(){
    return this.http.get('/server/api/v1/activities');
  }

  getActivity(id:number){
    return this.http.get('/server/api/v1/activities' + id);
  }


}
