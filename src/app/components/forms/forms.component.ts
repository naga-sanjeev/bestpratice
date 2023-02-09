import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';
import { AdmindbComponent } from '../admin/admindb/admindb.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  providers:[MessageService]
})
export class FormsComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private router: Router, private service: DataService, private https: HttpClient, private messageService: MessageService,private route: ActivatedRoute) { }
  gender: object=[];
  roles: any
  selectRole: any;
  addDoctor: boolean = false;
  addPatient: boolean = false;
  nothing: boolean = true;
  regForm: any
  isDisable = false
  uploadedFiles: any[] = [];
  url:any;
  myfile:any[]=[]; 
  id:number=0;
  userData:any
  role:string
  ngOnInit(): void {
    this.form();
    this.getRole()
  }
  form(){
    this.roles = [
      { role: 'doctor' },
      { role: 'patient' }
    ];
    this.gender = [
      { gen: 'male' },
      { gen: 'female' }
    ]
    this.regForm = this.fb.group({
      firstName: ['', [Validators.pattern('^[a-zA-Z]*'), Validators.maxLength(30), Validators.required]],
      middleName: ['', [Validators.pattern('^[a-zA-Z]*'), Validators.maxLength(30)]],
      lastName: ['', [Validators.pattern('^[a-zA-Z]*'), Validators.maxLength(30), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern("(^[0-9]{10,15}$)"),]],
      alternativeNumber: ['', [Validators.pattern("^[0-9]{10}$"),]],
      age: ['', [Validators.pattern("^[0-9]{2}$"), Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.minLength(5), Validators.required]],
      gender: ['', [Validators.required]],
      addressLine1: ['', [Validators.maxLength(60), Validators.required]],
      addressLine2: ['', [Validators.maxLength(60)]],
      city: ['', [Validators.maxLength(30),Validators.pattern('^[a-zA-Z]*'), Validators.maxLength(30), Validators.required]],
      state: ['', [Validators.maxLength(10),Validators.pattern('^[a-zA-Z]*'), Validators.maxLength(30), Validators.required]],
      country: ['', [Validators.maxLength(20),Validators.pattern('^[a-zA-Z]*'), Validators.required]],
      pinCode: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      bloodGroup: [''],
      role: ['', [Validators.required]],//doctor or patient
      designation: [''],
      availbility: [''],
      patientProblem: [''],
      image:['']
    })
    this.regForm.get('role').valueChanges.subscribe((data: any) => {
      this.changeValidators()
    })
  }
  getRole(){
    this.role = sessionStorage.getItem('role' || '')
    console.log(this.role);
    if(this.role=="Admin")
    {
      this.service.editId.subscribe((i:number)=>{
        console.log("forms",i)
        this.id=i
      })
      this.getUserData()   
    }
  }
  edit:boolean=false
  getUserData() {
    console.log(this.id);
    console.log(this.route.snapshot.params.id);
    if(this.route.snapshot.params.id==undefined){
      this.edit=false;
      console.log(this.edit);
    }
    else{
      console.log(this.id);
      this.edit=true
      console.log(this.edit);
      this.service.getUserById(environment.getUserDataById,this.route.snapshot.params.id).subscribe((res: any) => {
        console.log(res);
        this.userData = res.respones[0];
        console.log(this.userData);
        console.log(this.userData.Firstname);       
          this.regForm.patchValue({
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
            bloodGroup:res.respones[0].Bloodgroup,
            availbility:res.respones[0].availbility,
            designation:res.respones[0].designation,
            patientProblem:res.respones[0].patientproblem
        })
        this.onChange()
      })
    }
  }
  pannelBack() {
    this.router.navigate(["dashboard/table"])
  }
  changeValidators() {
    console.log(this.regForm.get('role').value);
    if (this.regForm.get("role").value == 'doctor') {
      this.regForm.controls['availbility'].setValidators([Validators.required])
      this.regForm.controls['designation'].setValidators([Validators.required])
      // this.regForm.control['image'].setValidators()
      this.regForm.controls['bloodGroup'].clearValidators()
      this.regForm.controls['patientProblem'].clearValidators()
    }
    else {
      this.regForm.controls['bloodGroup'].setValidators([Validators.required])
      this.regForm.controls['patientProblem'].setValidators([Validators.required, Validators.maxLength(30)])
      this.regForm.controls['availbility'].clearValidators()
      this.regForm.controls['designation'].clearValidators()
      // this.regForm.controls['image'].clearValidators()
    }
    this.regForm.get('availbility').updateValueAndValidity();
    this.regForm.get('designation').updateValueAndValidity();
    this.regForm.get('image').updateValueAndValidity();
    this.regForm.get('bloodGroup').updateValueAndValidity();
    this.regForm.get('patientProblem').updateValueAndValidity();
  }
  onBasicUploadAuto(event:any) {
    console.log("hai");
    console.log(event);
    console.log(this.myfile);
  }
  submit() {
    console.log('form registration: ', this.regForm)
    if (this.regForm.invalid || this.regForm.get('role').invalid) {
      console.log("invalid");
      const controls = this.regForm.controls;
      Object.keys(controls).forEach((key) => {
        controls[key].markAsTouched();
      });
    }
    else {
      const reqBody = {
        "Role": this.regForm.controls.role.value,
        "Firstname": this.regForm.controls.firstName.value, 
        "Middlename": this.regForm.controls.middleName.value,
        "LastName": this.regForm.controls.lastName.value,
        "Email": this.regForm.controls.email.value,
        "PhoneNumber": this.regForm.controls.phoneNumber.value,
        "Age": this.regForm.controls.age.value,
        "username": this.regForm.controls.userName.value,
        "password": this.regForm.controls.password.value,
        "Gender": this.regForm.controls.gender.value,
        "Addressline1": this.regForm.controls.addressLine1.value,
        "Addressline2": this.regForm.controls.addressLine2.value,
        "State": this.regForm.controls.state.value,
        "Pincode": this.regForm.controls.pinCode.value,
        "AlternativeNumber": this.regForm.controls.alternativeNumber.value,
        "City": this.regForm.controls.city.value,
        "Country": this.regForm.controls.country.value,
        "Bloodgroup": this.regForm.controls.bloodGroup.value,
        "patientproblem": this.regForm.controls.patientProblem.value,
        "height": this.regForm.controls.height.value,
        "weight": this.regForm.controls.weight.value,
        "designation": this.regForm.controls.designation.value,
        "availbility": this.regForm.controls.availbility.value,
        "appointment": "null",
        "doc_prescription_1": "null",
        "doc_prescription_2": "null",
        "image":this.regForm.controls.image.value
      }
      console.log(reqBody);
      this.onBasicUploadAuto(event);
      this.service.postApi(environment.postUserData,reqBody).subscribe((i)=>{
        console.log(i);
        setTimeout(()=>{
          this.router.navigateByUrl('/dashboard/table')
         },2000)
        this.messageService.add({ severity: 'success', summary: 'Updated successully', detail: '',life:3000 });
      })
    
    }
  }
  onChange() {
    this.selectRole = this.regForm.controls.role.value
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
  update() {
    //to find the controls whether it is valid or not
    console.log('regForm ', this.regForm)
    if (this.regForm.invalid || this.regForm.get('role').invalid) {
      console.log("invalid");
      const controls = this.regForm.controls;
      Object.keys(controls).forEach((key) => {
        controls[key].markAsTouched();
      });
    }
    else {
      const reqBody = {
        "Firstname": this.regForm.controls.firstName.value,
        "Middlename": this.regForm.controls.middleName.value,
        "LastName": this.regForm.controls.lastName.value,
        "Email": this.regForm.controls.email.value,
        "PhoneNumber": this.regForm.controls.phoneNumber.value,
        "Age": this.regForm.controls.age.value,
        "Role": this.regForm.controls.role.value,
        "CreatedBy": "null",
        "username": this.regForm.controls.userName.value,
        "password": this.regForm.controls.password.value,
        "Gender": this.regForm.controls.gender.value,
        "Addressline1": this.regForm.controls.addressLine1.value,
        "Addressline2": this.regForm.controls.addressLine2.value,
        "State": this.regForm.controls.state.value,
        "Pincode": this.regForm.controls.pinCode.value,
        "AlternativeNumber": this.regForm.controls.alternativeNumber.value || "null",
        "City": this.regForm.controls.city.value,
        "Country": this.regForm.controls.country.value,
        "Bloodgroup": this.regForm.controls.bloodGroup.value,
        "patientproblem": this.regForm.controls.patientProblem.value,
        "height": this.regForm.controls.height.value,
        "weight": this.regForm.controls.weight.value,
        "designation": this.regForm.controls.designation.value,
        "availbility": this.regForm.controls.availbility.value,
        "appointment": "null",
        "doc_prescription_1": "null",
        "doc_prescription_2": "null",
      }
      console.log(reqBody);
     this.service.updateUserData(environment.updateUserData,this.route.snapshot.params.id,reqBody).subscribe((i)=>{
       console.log(i);
       setTimeout(()=>{
        this.router.navigateByUrl('/dashboard/table')
       },2000)
       this.messageService.add({ severity: 'success', summary: 'Updated successully', detail: '',life:3000 });
     })
    }
  }
 
  reset() {
    this.regForm.reset();
  }

  

}
