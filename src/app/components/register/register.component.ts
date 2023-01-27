import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private messageService: MessageService) { }
  registerForm:FormGroup
  gender
  ngOnInit(): void {
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
      userName: ['', [Validators.pattern("^[a-zA-Z]*"), Validators.required]],
      password: ['', [Validators.minLength(5), Validators.required]],
      gender: ['', [Validators.required]]
    })
  }
  pannelback() {
    this.router.navigate([""])
  }
  submit() {

    if (this.registerForm.invalid) {
      console.log("invalid");
      const controls = this.registerForm.controls;
      Object.keys(controls).forEach((key) => {
        controls[key].markAsTouched();
      });
    }
    else{
      this.messageService.add({ severity: 'success', summary: 'Your registrede successfully', detail: '' });
    }
  }
}
