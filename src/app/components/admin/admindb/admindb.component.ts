import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';
@Component({
  selector: 'app-admindb',
  templateUrl: './admindb.component.html',
  styleUrls: ['./admindb.component.scss']
})
export class AdmindbComponent implements OnInit {

  constructor(private router: Router, private service: DataService) { }
  usersData: any = []
  ngOnInit(): void {
    this.getTableData()
  }
  getTableData() {
    this.service.getApi(environment.listOfUsers).subscribe((i:any)=>{
      console.log(i.respones);
      this.usersData=i.respones
    })
  }
  onEdit() {
    console.log("edit option selected");
  }
  onDelete(data: any) {
    console.log(data);
    this.service.deleteApi(environment.deleteUserData,data).subscribe((i:any)=>{
      console.log(i);
    })
    this.ngOnInit()
  }
}
