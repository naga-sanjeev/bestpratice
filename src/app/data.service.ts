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
  public role = new Subject()
  sendRole(data: string) {
    console.log("hello", data);
    this.role.next({ text: data });
    // this.role.subscribe(d=>console.log(d))
  }
  getRole(): Observable<any> {
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
  retriveMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  public editId = new Subject();
  getEditUserId(id) {
    console.log(id);
    this.editId.next(id)
  }
  public loginUserId = new Subject();
  getLoginUserId(id) {
    console.log(id);
    this.loginUserId.next(id)
  }
  postApi(endpoint, body): Observable<any> {
    return this.http.post(endpoint, body)
  }
  getApi(endpoint) {
    return this.http.get(endpoint)
  }
  deleteApi(endpoint, data) {
    return this.http.delete(endpoint + data)
  }
  getUserById(endpoint, id) {
    console.log(id);
    return this.http.get(endpoint + id)
  }
  updateUserData(endpoint, id, data) {
    console.log(data);
    return this.http.put(endpoint + id, data);
  }
  getData(endpoint) {
    return this.http.get(endpoint)
  }
}
