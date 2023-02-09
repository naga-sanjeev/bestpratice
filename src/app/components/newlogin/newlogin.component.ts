import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.scss']
})
export class NewloginComponent implements OnInit {
  form: FormGroup
  constructor(private route: Router, private service: DataService, private fb: FormBuilder) {  }
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[miraclesoft]+\.com*$/)]],
      password: ['', [Validators.required, Validators.pattern('^[\\sa-zA-Z0-9@$]*$')]]
    })
  }
  onClick(){
    
  }
}