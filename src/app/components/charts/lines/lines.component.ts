import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {
 
  basicData: any;
  basicOptions: any;
 
  // datas: any = []

  // label: any = []
  table:any=[]


  finalData1: any
  users= [];
  // datas:any =[];
  // info: any;

  datas1=[];
  info1=[]

  constructor(private rs: DataService) { }

  ngOnInit(): void {
      
    this.rs.getData(environment.charts).subscribe((res: any) => {
      this.finalData1 = res
      console.log(this.finalData1, "yuyui")
     
      const months = ['jan', 'feb', 'mar', 'april', 'may', 'june',
      'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
      const sorter = (a, b) => {
        
            return months.indexOf(a.month) - months.indexOf(b.month)
      };
      this.finalData1.sort(sorter);
      console.log(this.finalData1, "sorting");

this.datas1=this.finalData1.map((ele:any)=>{
  return ele.month
})

      console.log(this.datas1);
      this.info1 = this.finalData1.map((element: any) => {
        return element.emp1
      });
      console.log(this.info1);
      console.log('label',this.datas1)
      this.basicData = {
        labels: this.datas1,
        datasets: [
            {
            label: '2021',
             data:  this.info1,
              fill: false,
             borderColor: '#42A5F5',
             tension: .4    
            }
        ]
    };
    })
  }

}

