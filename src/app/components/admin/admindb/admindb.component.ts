import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';
@Component({
  selector: 'app-admindb',
  templateUrl: './admindb.component.html',
  styleUrls: ['./admindb.component.scss'],
  providers: [MessageService]
})
export class AdmindbComponent implements OnInit {
 
  constructor(private router: Router, private service: DataService, private messageService: MessageService) { }
  usersData: any = []
  role:string
  action:boolean
  ngOnInit(): void {
    this.getTableData()
    this.role = sessionStorage.getItem('role' || '')
    this.getAction()
  }
  getAction(){
    console.log(this.role);
    if(this.role=='Admin'){
      this.action=true
    }
    else{
      this.action=false
    }
  }

  getTableData() {
    this.service.getApi(environment.listOfUsers).subscribe((i: any) => {
      console.log(i.respones);
      this.usersData = i.respones
    })
  }
  onEdit(id) {
    console.log("edit option selected");
    console.log(id);
    this.service.getEditUserId(id)
    this.router.navigateByUrl('dashboard/forms');
  }
  onDelete(data: any) {
    console.log(data);
    this.service.deleteApi(environment.deleteUserData, data).subscribe((i: any) => {
      console.log(i);
    })
    this.ngOnInit()
  }
}
