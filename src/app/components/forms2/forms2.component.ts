import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
export class register{
  firstName:string=''
  middleName:string=''
  lastName:string=''
  email:string='';
  gender:string='';
  phoneNumber:string='';
  alternateNumber:string='';
  age:string='';
  userName:string=''
  password:string=''
  city:string=''
  state:string=''
  country:string=''
  pincode:string='';
  height:string='';
  weight:string='';
  role:string=''
  designation:string=''
  availableTime:string=''
  bloodGroup:string=''
  problem:string;
  addressLine1:string;
  addressLine2:string;
}

export class contact {
  firstName:string='';
  lastname:string='';
  gender:string='';
  isToc:boolean=false;
  email:string='';
} 
@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.scss']
})
export class Forms2Component implements OnInit {
  register:register;
  contact:contact;
  constructor() { 
    this.contact = { 
      firstName:"",
      lastname:"",
      gender:"male",
      isToc:true,
      email:"",
    };
    this.register = { 
      firstName:'',
      middleName:'',
      lastName:'',
      email:'',
      gender:'',
      phoneNumber:'',
      alternateNumber:'',
      age:'',
      userName:'',
      password:'',
      city:'',
      state:'',
      country:'',
      pincode:'',
      height:'',
      weight:'',
      role:'',
      designation:'',
      availableTime:'',
      bloodGroup:'',
      problem:'',
      addressLine1:'',
      addressLine2:''
  };
  }
  firstName:string=''
  genders:any=[]
  roles:any=[]
  addDoctor:boolean=false
  addPatient:boolean=false
  nothing:boolean=false
  selectRole:any
  myFile:any[]=[]
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
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
  addUser(registerForm:NgForm) {
    // console.log(registerForm.value);
    if(registerForm.invalid){
      console.log("invalid");
      console.log(registerForm);
    }
    else{
      console.log("valid");
    }
  }
  onBasicUploadAuto(event:any) {
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
   onSubmit(contactForm:NgForm) {
    console.log(contactForm.value);
  }
  restForm(formvalue:NgForm){
    formvalue.reset()
  }
}
