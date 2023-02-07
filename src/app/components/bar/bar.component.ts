import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  basicData: any;
  basicOptions: any;
 
  // datas: any = []

  // label: any = []
  table:any=[]


  finalData: any
  users= [];
  datas:any =[];
  info: any;


  constructor(private rs: DataService) { }

  ngOnInit(): void {
      
    this.rs.getData(environment.charts).subscribe((res: any) => {
      this.finalData = res
      console.log(this.finalData, "yuyui")
      this.finalData.forEach((element:any) => {
        this.datas.push(element.month)
      });
      console.log(this.datas);
      this.info = this.finalData.map((element: any) => {
        return element.emp1
      });
      console.log(this.info);
      console.log('label',this.datas)
      this.basicData = {
        labels: this.datas,
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: this.info
            }
            
        ]
    };
    })
  }
}