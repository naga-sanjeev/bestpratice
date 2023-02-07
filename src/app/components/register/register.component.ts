import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private messageService: MessageService, private service: DataService) { }
  registerForm: FormGroup
  gender
  usersData = []
  ngOnInit(): void {
    this.registaraion();
    this.getData()
  }
  getData() {
    this.service.getData(environment.listOfUsers).subscribe((i: any) => {
      // console.log(i.respones);
      this.usersData = i.respones
      console.log(this.usersData);
      // this.verification()
    })
  }
  sameUserName: Boolean
  userNameVerification(userName) {
    console.log(userName);
    this.usersData.forEach(ele => {
      if (ele.username == userName) {
        console.log(ele.username);
        this.sameUserName = false
      }
      else {
        this.sameUserName = true
      }
    })
    if (this.sameUserName == false) {
      this.messageService.add({ severity: 'error', summary: 'Registration is unsuccessfull', detail: ' User Name is already registered so enter different UserName', life: 3000 });
    }
  }
  pannelback() {
    this.router.navigate([""])
  }
  registaraion() {
    this.gender = [
      { gen: 'male' },
      { gen: 'female' }
    ]
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.pattern('^[a-zA-Z]*'), Validators.maxLength(30), Validators.required]],
      middleName: ['', [Validators.pattern('^[a-zA-Z]*'), Validators.maxLength(30)]],
      lastName: ['', [Validators.pattern('^[a-zA-Z]*'), Validators.maxLength(30), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern("([0-9]{10,15}$)"),]],
      alternativeNumber: ['', [Validators.pattern("^[0-9]{10}$"),]],
      age: ['', [Validators.pattern("^[0-9]{2}$"), Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.minLength(5), Validators.required]],
      gender: ['', [Validators.required]]
    })
  }
  submit() {
    if (this.registerForm.invalid) {
      console.log("invalid");
      const controls = this.registerForm.controls;
      Object.keys(controls).forEach((key) => {
        controls[key].markAsTouched();
      });
    }
    else {
      this.userNameVerification(this.registerForm.controls.userName.value);
      if (this.sameUserName == true) {
        this.router.navigate([""])
        this.messageService.add({ severity: 'success', summary: 'Your registred successfully', life: 10000 });
      }
    }
  }
}
