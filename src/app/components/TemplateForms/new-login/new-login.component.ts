import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.scss'],
})
export class NewLoginComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder, private messageService: MessageService, private service: DataService) { }
  //crearting a form  to login 
  form: FormGroup
  status: string
  role: string
  ngOnInit(): void {
    this.form = this.fb.group({
      userName: '',
      password: ''
    })
  }
  loginDetails: object = []
  onClick() {
    // this.service.broadCastMessage("button click")
    // this.service.retriveMessage().subscribe((res)=>console.log(res))
    const body = {
      "username": this.form.controls.userName.value,
      "password": this.form.controls.password.value
    }
    this.service.postApi(environment.login, body).subscribe((i: any) => {
      console.log(i);
      this.loginDetails = i
      this.loginVerification(this.loginDetails, body)
    })
    if (this.status != 'success') {
      if (body.username == "admin" && body.password == "admin") {
        this.status = 'success'
        // this.service.sendRole('admin')
        this.role = "Admin"
        console.log("hello", this.role);
        sessionStorage.setItem('role', this.role);
        this.router.navigateByUrl('dashboard');
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Enter UserName and Password correctly', detail: '' });
      }
    }
  }
  //function for checking the login verification 
  loginVerification(data: any, body) {
    if (data.status == 'success') {
      if (data.response[0].Role == 'patient') {
        this.status = 'succes'
        this.router.navigateByUrl('dashboard');
        this.role = "Patient"
        sessionStorage.setItem('role', this.role);
        // this.service.getLoginUserId(data.response[0].Id)
        localStorage.setItem('id', data.response[0].Id);
      }
      else if (data.response[0].Role == 'doctor') {
        this.status = 'succes'
        this.role = "Doctor"
        sessionStorage.setItem('role', this.role);
        this.router.navigateByUrl('dashboard');
        // this.service.getLoginUserId(data.response[0].Id)
        localStorage.setItem('id', data.response[0].Id);
      }
    }
    if (this.status = "!success") {
      this.messageService.add({ severity: 'error', summary: 'Enter UserName and Password correctly', detail: '' });
    }
  }
  sendRole(data: string) {
    console.log("hai", data);
  }
}
