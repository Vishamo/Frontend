import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
  apiUrl='http://localhost:3000/result';
  apiUrllogin='http://localhost:3000/login';
  
  //get all Data
getAllData():Observable<any>
{
  return this._http.get(`${this.apiUrl}`);
}

//create Data

createData(data:any):Observable<any>{
  console.log(data,'createapi ==>')
  return this._http.post(`${this.apiUrl}`,data);
}

//delete data
deleteData(id:any):Observable<any>
{
  let ids=id;
  return this._http.delete(`${this.apiUrl}/${ids}`)
}

updateData(data:any,id:any):Observable<any>
{
  let ids=id;
  return this._http.put(`${this.apiUrl}/${ids}`,data);
}
getSingleData(id:any):Observable<any>
{
  let ids=id;
  return this._http.get(`${this.apiUrl}/${ids}`);
}

getauth():Observable<any>
{
  return this._http.get(`${this.apiUrllogin}`);
}

}
