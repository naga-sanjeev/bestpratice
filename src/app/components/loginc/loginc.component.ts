import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-loginc',
  templateUrl: './loginc.component.html',
  styleUrls: ['./loginc.component.scss'],
  providers:[MessageService]
})
export class LogincComponent implements OnInit {
  display: boolean;
  displayForgotDialog: boolean;
  loginForm: FormGroup;
  loginRes: any;
  role: any
  password: any
  name: any
  constructor(private router: Router, private fb: FormBuilder, private service: DataService,private messageService: MessageService ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });
  }
  login() {
    const body = {
      "username": this.loginForm.controls.email.value,
      "password": this.loginForm.controls.password.value
    }
    let status=''
    this.service.loginVerification(body).subscribe((data: any) => {
      console.log(data);
      status=data.status
      if (data.status == 'success') {

        console.log(data.response);
        console.log(data.response[0].Role);
        if (data.response[0].Role == 'patient') {
          this.router.navigateByUrl('root/listofdoctors');
          this.role = "Patient"
          localStorage.setItem('role', this.role);
        }
        else if (data.response[0].Role == 'doctor') {
          this.router.navigateByUrl('root/doctor');
          this.role = "Doctor"
          localStorage.setItem('role', this.role);
        }
      }
    })
    console.log(body.username);
    if (body.username == 'admin' && body.password == 'admin') {
      status = 'success'
      this.router.navigateByUrl('root/admin');
      this.role = "Admin"
      sessionStorage.setItem('role', this.role);
    }
    if(status="!success")
    {
      // console.log("failure");
      this.messageService.add({severity:'error', summary:'Enter UserName and Password correctly', detail:''});
     }
  }
  registration() {
    this.display = true;
  }
  // navigateToCustomerRegisterForm() {
  //   this.router.navigate(['/customerRegistrationPage']);
  // }
  // navigateToconsultantRegisterForm() {
  //   this.router.navigate(['/consultantRegistrationPage']);
  // }
  // navigateToVendorPage()
  // {
  //   this.router.navigate(['/vendorRegistrationPage'],);
  // }
  // forgotPassword() {
  //   this.displayForgotDialog = true;
  //   this.forgotpwdForm.get('emailId').reset();
  // }
  showDialog() {
    this.display = true;
  }

}
