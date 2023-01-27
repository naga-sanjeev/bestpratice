import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { LogincComponent } from '../../loginc/loginc.component';

@Component({
  selector: 'app-listofdoctors',
  templateUrl: './listofdoctors.component.html',
  styleUrls: ['./listofdoctors.component.scss'],
  providers: [MessageService]
})
export class ListofdoctorsComponent implements OnInit {

  constructor(private service: DataService, private messageService: MessageService) { }
  patientName: any;
  tokenNumber: any;
  patientList: any;
  rows: any = 10;
  page: any = 1;
  pageCount: any;
  first: any;
  reqCount: any;
  doctorData = [];
  rating: number;
  list:any
  slotbtn:boolean=true
  ngOnInit(): void {
    // this.doctorData = this.service.doctorsList
    this.getListOfDoctors();
  }
  slot() {
    this.messageService.add({ severity: 'success', summary: 'Your slot is booked', detail: '' });
    console.log(this.rating);
    this.slotbtn=false
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

  getListOfDoctors() {
    var j=0
    this.service.getDoctorsdata().subscribe((i: any) => {
      console.log(i);
      localStorage.setItem('doctordata', JSON.stringify(i.response))
      this.doctorData = JSON.parse(localStorage.getItem('doctordata') || '[]')
      console.log(this.doctorData);
      
      // this.doctorData[j] = i.respones[j]
      // console.log(this.doctorData);
      // j++
    })
  }
}
