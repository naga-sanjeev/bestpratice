import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder, private messageService: MessageService, private service: DataService) { }
  //crearting a form  to login 
  form: FormGroup
  status:string
  ngOnInit(): void {
    this.form = this.fb.group({
      userName: '',
      password: ''
    })

  }
  loginDetails: object = []
  onClick() {
    const body = {
      "username": this.form.controls.userName.value,
      "password": this.form.controls.password.value
    }
    
    this.service.postApi(environment.login,body).subscribe((i: any) => {
      console.log(i.status);
      this.loginDetails = i
      this.loginVerification(this.loginDetails,body)
    })
    if(body.username=="admin" && body.password=="admin"){
      this.status = 'success'
      this.router.navigateByUrl('dashboard/dashboard');
    }
    else{
      this.messageService.add({ severity: 'error', summary: 'Enter UserName and Password correctly', detail: '' });
    }
  }
  //function for checking the login verification 
  loginVerification(data: any, body) {
    if (data.status == 'success') {
      if (data.response[0].Role == 'patient') {
        this.status='succes'
        this.router.navigateByUrl('dashboard');
      }
      else if (data.response[0].Role == 'doctor') {
        this.status='succes'
        this.router.navigateByUrl('dashboard');
      }
    }
    if (this.status = "!success") {
      this.messageService.add({ severity: 'error', summary: 'Enter UserName and Password correctly', detail: '' });
    }
  }
}
