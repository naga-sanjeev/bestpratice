import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';
export class register {
  firstName: string = ''
  middleName: string = ''
  lastName: string = ''
  email: string = '';
  gender: string = '';
  phoneNumber: string = '';
  alternateNumber: string = '';
  age: string = '';
  userName: string = ''
  password: string = ''
  city: string = ''
  state: string = ''
  country: string = ''
  pincode: string = '';
  height: string = '';
  weight: string = '';
  role: string = ''
  designation: string = ''
  availableTime: string = ''
  bloodGroup: string = ''
  problem: string;
  addressLine1: string;
  addressLine2: string;
  image: any;
}
@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  register: register;
  constructor(private router: Router, private service: DataService, private messageService: MessageService, private route: ActivatedRoute) {

    this.register = {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      gender: '',
      phoneNumber: '',
      alternateNumber: '',
      age: '',
      userName: '',
      password: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
      height: '',
      weight: '',
      role: '',
      designation: '',
      availableTime: '',
      bloodGroup: '',
      problem: '',
      addressLine1: '',
      addressLine2: '',
      image: ''
    };
  }
  firstName: string = ''
  genders: any = []
  roles: any = []
  addDoctor: boolean = false
  addPatient: boolean = false
  nothing: boolean = false
  selectRole: any
  myFile: any[] = []
 mobNumberPattern = "^[0-9]$"; 
  ngOnInit(): void {
    this.genders = [
      { gen: 'male' },
      { gen: 'female' }
    ]
    this.roles = [
      { role: 'doctor' },
      { role: 'patient' }
    ]
  }
  addUser(registerForm: NgForm) {
    // console.log(registerForm.value);
    if (registerForm.invalid) {
      const controls = registerForm.controls
      Object.keys(controls).forEach((key)=>{
        controls[key].markAllAsTouched()
      })
      console.log(controls);
    }
    else {
      console.log("valid");
      console.log(registerForm.controls.addressLine1.value);
      const reqBody = {
        "Role": registerForm.value.role,
        "Firstname": registerForm.value.firstName,
        "Middlename": registerForm.value.middleName,
        "LastName": registerForm.value.lastName,
        "Email": registerForm.value.email,
        "PhoneNumber": registerForm.value.phoneNumber,
        "Age": registerForm.value.age,
        "username": registerForm.value.userName,
        "password": registerForm.value.password,
        "Gender": registerForm.value.gender,
        "Addressline1": registerForm.value.addressLine1,
        "Addressline2": registerForm.value.addressLine2,
        "State": registerForm.value.state,
        "Pincode": registerForm.value.pinCode,
        "AlternativeNumber": registerForm.value.alternativeNumber,
        "City": registerForm.value.city,
        "Country": registerForm.value.country,
        "Bloodgroup": registerForm.value.bloodGroup,
        "patientproblem": registerForm.value.patientProblem,
        "height": registerForm.value.height,
        "weight": registerForm.value.weight,
        "designation": registerForm.value.designation,
        "availbility": registerForm.value.availbility,
        "appointment": "null",
        "doc_prescription_1": "null",
        "doc_prescription_2": "null",
        "image": registerForm.value.image.value
      }
      console.log(reqBody);
      this.onBasicUploadAuto(event);
      // this.service.postApi(environment.postUserData,reqBody).subscribe((i)=>{
      //   console.log(i);
      //   setTimeout(()=>{
      //     this.router.navigateByUrl('/dashboard/table')
      //    },2000)
      //   this.messageService.add({ severity: 'success', summary: 'Updated successully', detail: '',life:3000 });
      // })
    }
  }
  onBasicUploadAuto(event: any) {
    console.log("hai");
    console.log(event);
  }
  onChange() {
    console.log(this.selectRole);

    // this.selectRole = this.regForm.controls.role.value
    if (this.selectRole == "doctor") {
      this.addDoctor = true;
      this.addPatient = false;
      this.nothing = false
    }
    else if (this.selectRole == "patient") {
      this.addPatient = true;
      this.addDoctor = false;
      this.nothing = false;
    }
  }
  restForm(formvalue: NgForm) {
    formvalue.reset()
  }
}
