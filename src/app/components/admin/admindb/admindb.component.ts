import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admindb',
  templateUrl: './admindb.component.html',
  styleUrls: ['./admindb.component.scss']
})
export class AdmindbComponent implements OnInit {

  constructor(private router: Router, private service: DataService) { }
  patientName: any;
  tokenNumber: any;
  patientList: any;
  rows: any = 10;
  page: any = 1;
  pageCount: any;
  first: any;
  reqCount: any;


  usersData: any = []

  ngOnInit(): void {

    this.getTableData()

  }

  getTableData() {
    this.service.geUserstData().subscribe((x: any) => {
      // console.log(x);
      // console.log(x.respones);
      localStorage.setItem('respones', JSON.stringify(x.respones))
      this.usersData = JSON.parse(localStorage.getItem('respones') || '[]')
    })
  }

  paginate(event) {
    // console.log("server side pagination", event);
    let i = 1;
    this.first = event.first;
    this.rows = event.rows;
    this.page = event.page + i++;
    this.pageCount = event.pageCount;
    // console.log(this.page);
    // this.getRequirementsList()
  }
  onEdit() {
    console.log("edit option selected");
  }

  onDelete(data: any) {
    console.log(data);
    // const reqBody:any={
    //   "Id":data
    // }
    this.service.deleteUser(data).subscribe((i: any) => {
      console.log(i);
    })
    this.getTableData()
  }

  add() {
    this.router.navigateByUrl('root/addusers')
  }

}
