import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [MessageService]
})
export class EditComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private service: DataService,private messageService: MessageService) { }
  gender: any;
  roles: any
  selectRole: any;
  addDoctor: boolean = false;
  addPatient: boolean = false;
  nothing: boolean = true;
  edit: any
  userdata: any
  ngOnInit(): void {
    this.getUserData();
    this.roles = [
      { role: 'doctor' },
      { role: 'patient' }
    ];
    this.gender = [
      { gen: 'male' },
      { gen: 'female' }
    ]
    this.edit = this.fb.group({
      firstName: ['', [Validators.pattern('^[a-zA-Z]*'), Validators.maxLength(30), Validators.required]],
      middleName: ['', [Validators.pattern('^[a-zA-Z]*'), Validators.maxLength(30)]],
      lastName: ['', [Validators.pattern('^[a-zA-Z]*'), Validators.maxLength(30), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern("([0-9]{10,15}$)"),]],
      alternativeNumber: ['',],
      age: ['', [Validators.pattern("^[0-9]{2}$"), Validators.required]],
      userName: ['', [Validators.pattern("^[a-zA-Z]*"), Validators.required]],
      password: ['', [Validators.minLength(5), Validators.required]],
      gender: ['', [Validators.required]],
      addressLine1: ['', [Validators.maxLength(60)]],
      addressLine2: ['', [Validators.maxLength(60)]],
      city: ['', [Validators.maxLength(30)]],
      state: ['', [Validators.maxLength(30)]],
      country: ['', [Validators.maxLength(20)]],
      pinCode: ['', [Validators.pattern("^[0-9]*")]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      bloodGroup: [''],
      role: ['', [Validators.required]],//doctor or patient
      designation: [''],
      availbility: [''],
      patientProblem: [''],
      image:['']
    });
    this.edit.get('role').valueChanges.subscribe((data: any) => {
      this.changeValidators()
    })
  }
  changeValidators() {
    console.log(this.edit.get('role').value);
    if (this.edit.get("role").value == 'doctor') {
      this.edit.controls['availbility'].setValidators([Validators.required])
      this.edit.controls['designation'].setValidators([Validators.required])
      this.edit.controls['bloodGroup'].clearValidators()
      this.edit.controls['patientProblem'].clearValidators()
    }
    else {
      this.edit.controls['bloodGroup'].setValidators([Validators.required])
      this.edit.controls['patientProblem'].setValidators([Validators.required, Validators.maxLength(30)])
      this.edit.controls['availbility'].clearValidators()
      this.edit.controls['designation'].clearValidators()
    }
    this.edit.get('availbility').updateValueAndValidity();
    this.edit.get('designation').updateValueAndValidity();
    this.edit.get('bloodGroup').updateValueAndValidity();
    this.edit.get('patientProblem').updateValueAndValidity();
  }
  onChange() {
    this.selectRole = this.edit.controls.role.value
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
  pannelback() {
    this.router.navigate(["dashboard/admin"])
  }
  getUserData() {
    console.log(this.route.snapshot.params.id);
    this.service.getUserById(environment.getUserDataById,this.route.snapshot.params.id).subscribe((res: any) => {
      console.log(res);
      this.userdata = res.respones;
      console.log(this.userdata);
      this.edit.patchValue({
        firstName: res.respones[0].Firstname,
        middleName: res.respones[0].Middlename,
        lastName: res.respones[0].LastName,
        email: res.respones[0].Email,
        phoneNumber: res.respones[0].PhoneNumber,
        alternativeNumber: res.respones[0].AlternativeNumber,
        age: res.respones[0].Age,
        gender: res.respones[0].Gender,
        userName: res.respones[0].username,
        password: res.respones[0].password,
        addressLine1: res.respones[0].Addressline1,
        addressLine2: res.respones[0].Addressline2,
        city: res.respones[0].City,
        state: res.respones[0].State,
        country: res.respones[0].Country,
        pinCode: res.respones[0].Pincode,
        height: res.respones[0].height,
        weight: res.respones[0].weight,
        role: res.respones[0].Role,
        bloodGroup: res.respones[0].Bloodgroup,
        designation: res.respones[0].designation,
        availbility: res.respones[0].availbility,
        patientProblem: res.respones[0].patientproblem
      });
      this.onChange()
    })
  }
  update() {
    //to find the controls whether it is valid or not
    console.log('edit ', this.edit)
    if (this.edit.invalid || this.edit.get('role').invalid) {
      console.log("invalid");
      const controls = this.edit.controls;
      Object.keys(controls).forEach((key) => {
        controls[key].markAsTouched();
      });
    }
    else {
      const reqBody = {
        "Firstname": this.edit.controls.firstName.value,
        "Middlename": this.edit.controls.middleName.value,
        "LastName": this.edit.controls.lastName.value,
        "Email": this.edit.controls.email.value,
        "PhoneNumber": this.edit.controls.phoneNumber.value,
        "Age": this.edit.controls.age.value,
        "Role": this.edit.controls.role.value,
        "CreatedBy": "null",
        "username": this.edit.controls.userName.value,
        "password": this.edit.controls.password.value,
        "Gender": this.edit.controls.gender.value,
        "Addressline1": this.edit.controls.addressLine1.value,
        "Addressline2": this.edit.controls.addressLine2.value,
        "State": this.edit.controls.state.value,
        "Pincode": this.edit.controls.pinCode.value,
        "AlternativeNumber": this.edit.controls.alternativeNumber.value || "null",
        "City": this.edit.controls.city.value,
        "Country": this.edit.controls.country.value,
        "Bloodgroup": this.edit.controls.bloodGroup.value,
        "patientproblem": this.edit.controls.patientProblem.value,
        "height": this.edit.controls.height.value,
        "weight": this.edit.controls.weight.value,
        "designation": this.edit.controls.designation.value,
        "availbility": this.edit.controls.availbility.value,
        "appointment": "null",
        "doc_prescription_1": "null",
        "doc_prescription_2": "null",
      }
      console.log(reqBody);
     this.service.updateUserData(environment.updateUserData,this.route.snapshot.params.id,reqBody).subscribe((i)=>{
       console.log(i);
       this.messageService.add({ severity: 'success', summary: 'Updated successully', detail: '' });
     })
    }
  }
  reset() {
    this.edit.reset();
  }
}
