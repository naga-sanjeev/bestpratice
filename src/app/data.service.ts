import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class DataService {
  data: any = {}
  constructor(private http: HttpClient, private router: Router) { }
  getDoctorsdata() {
    return this.http.get(' http://172.17.12.65:8000/listofrole/doctor')
  }
  public role=new Subject()
  sendRole(data:string){
    console.log("hello",data);
    this.role.next({text:data});
    // this.role.subscribe(d=>console.log(d))
  }
  getRole():Observable<any>{
    //  return this.role.subscribe((res)=>console.log(res))
    return this.role.asObservable();
  }
  private subject = new Subject();

  broadCastMessage(message: string) {
      this.subject.next({ text: message });
  }

  removeMessages() {
      this.subject.next();
  }

  retriveMessage(): Observable<any>{
      return this.subject.asObservable();
  }
  postApi(endpoint, body): Observable<any> {
    // let myHeaders=new HttpHeaders({"key1":"val1"})
    // myHeaders=myHeaders.set("AuthKey","123-987")
    // return this.http.post(endpoint,body,{headers:myHeaders}) }
    return this.http.post(endpoint, body)
  }
  getApi(endpoint) {
    // let myHeaders=new HttpHeaders({"key1":"val1"})
    // myHeaders=myHeaders.set("AuthKey","123-987")
    // let myParams = new HttpParams()
    // myParams = myParams.set("key", "123-456")
    // return this.http.get(endpoint)
    return this.http.get(endpoint)
  }
  deleteApi(endpoint,data){
    return this.http.delete(endpoint+data)
  }
  getUserById(endpoint,id) {
    console.log(id);
    return this.http.get(endpoint+id)
  }
  updateUserData(endpoint,id,data){
      return this.http.put(endpoint+id,data);
  }
}
