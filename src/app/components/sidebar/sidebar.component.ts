import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() public sideBarData:boolean
  constructor(private primengConfig: PrimeNGConfig,private service:DataService) { }
  items: MenuItem[] = [];
  item2: MenuItem[] = [];
  dot: false | undefined;
  role: string
  profileMode = 'popup';
  model = []
  ripple: boolean;
  ngOnInit(): void {
    this.sideBar()
    this.primengConfig.ripple = true;    
  }
  sideBar() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/dashboard']
      },
      {
        label: 'Charts',
        items: [
          {
            label: 'Bar',
            routerLink: ['/dashboard/bar']
          },
          {
            label: 'Doughnut',
            routerLink: ['/dashboard/doughnut']
          },
          {
            label: 'Line',
            routerLink: ['/dashboard/line']
          },
          {
            label: 'Pie',
            routerLink: ['/dashboard/pie']
          },
          {
            label: 'Polar',
            routerLink: ['/dashboard/polar']
          },
          {
            label: 'Radar',
            routerLink: ['/dashboard/radar']
          },
        ]
      },
      {
        label: "Forms",
        items: [{
          label: 'Reactive Forms',
          routerLink: ['/dashboard/reactive']
        },
        {
          label: 'Template Driven Forms',
          routerLink: ['/dashboard/templateDriven']
        },
        ]
      },
      {
        label: 'Table',
        routerLink: ['/dashboard/editTable']
      }
    ];
  }  
  mobileView:boolean=false
  getScreenWidth:any;
  getScreenHeight:any
  @HostListener('window:resize',['$event']) onWindowResize(){
    this.getScreenWidth=window.innerWidth;
    this.getScreenHeight=window.innerHeight;
    if(this.getScreenWidth<=755){
      this.mobileView=true
      // console.log("mobileView:"+this.mobileView);
      
    }
    if(this.getScreenWidth>=755){
      this.mobileView=false
      // console.log("mobileView:"+this.mobileView);
      
    }
  }
}
