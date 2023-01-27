import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class DataService {
  data: any = {}
  constructor(private http: HttpClient,private router: Router) { }
  doctorsList = [
    {
      img: 'assets/images/doctor1.jfif',
      name: 'Bhaskar',
      designation: 'M.B.B.S, MS(Master of Surgery)',
      availabletime: '11 A.M to 10 P.M'
    },
    {
      img: 'assets/images/doctor2.jfif',
      name: 'Vijay',
      designation: 'M.B.B.S, MS(Master of Surgery)',
      availabletime: '2 P.M to 11 P.M'
    },
    {
      img: 'assets/images/doctor3.jfif',
      name: 'Jhansi',
      designation: 'B.D.S( Bachelor of Dental Surgery)',
      availabletime: '10 A.M to 8 P.M'
    },
    {
      img: 'assets/images/doctor5.jfif',
      name: 'Naga',
      designation: 'M.B.B.S, Child Specialist',
      availabletime: '9 A.M to 8 P.M'
    },
    {
      img: 'assets/images/doctor4.jfif',
      name: 'Sai',
      designation: 'B.A.M.S( Bachelor of Ayurvedic Medicine and Surgery)',
      availabletime: '10 A.M to 8 P.M'
    },
    {
      img: 'assets/images/doctor6.jfif',
      name: 'Teja',
      designation: 'B.U.M.S(Bachelor of Unani Medicine and Surgery)',
      availabletime: '10 A.M to 9 P.M'
    },
    {
      img: 'assets/images/doctor7.jfif',
      name: 'Surya',
      designation: 'B.H.M.S(Bachelor of Homeopathy Medicine and Surgery)',
      availabletime: '8 A.M to 5 P.M'
    },
    {
      img: 'assets/images/doctor8.jfif',
      name: 'Varma',
      designation: 'B.U.M.S(Bachelor of Unani Medicine and Surgery)',
      availabletime: '2 p.M to 2 A.M'
    }
  ]

  geUserstData() {
    return this.http.get('http://172.17.12.65:8000/listofusers')
  }
  postUserData(reqBody: any) {
    console.log("postdata:");
    return this.http.post('http://172.17.12.65:8000/postuserdata', reqBody);
  }

  deleteUser(id: any) {
    console.log(id);
    return this.http.delete('http://172.17.12.65:8000/deleteuser/'+ id);
  }

  loginVerification(body: any) {
    // console.log(body);
    return this.http.post('http://172.17.12.65:8000/login', body)
  }

  getDoctorsdata()
  {
    return this.http.get(' http://172.17.12.65:8000/listofrole/doctor')
  }


  postApi(endpoint,body):Observable<any> {
    // let myHeaders=new HttpHeaders({"key1":"val1"})
    // myHeaders=myHeaders.set("AuthKey","123-987")
    // return this.http.post(endpoint,body,{headers:myHeaders}) }
    return this.http.post(endpoint,body) }
  getApi(endpoint){
    // let myHeaders=new HttpHeaders({"key1":"val1"})
    // myHeaders=myHeaders.set("AuthKey","123-987")

    let myParams = new HttpParams()
    myParams=myParams.set("key","123-456")
    // return this.http.get(endpoint)
    return this.http.get(endpoint,{params:myParams})
  }  
}
