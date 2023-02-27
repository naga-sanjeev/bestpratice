import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';
import { AppComponent } from 'src/app/app.component';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: DataService, private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  currenYearFormat: number = new Date().getFullYear();
  title = 'TaskManagement';
  items: MenuItem[] = [];
  item2: MenuItem[] = [];
  role: string
  ripple: boolean;
  sideBar:boolean=true
  pannelMenu:boolean=true
  ngOnInit(): void {
    this.service.sideBar.subscribe((res)=>{
      this.sideBar=res
    })
    this.service.pannelMenu.subscribe((res)=>{
      this.pannelMenu=res
    })
    this.getUsersData()
    // this.onClick();
    this.primengConfig.ripple = true;
    // this.service.notifyObservable.subscribe((res:any)=>{
    //   if(res.refresh){
    //     this.sidebar=true
    //   }
    // })
  }
  getUsersData() {
    this.service.getApi(environment.listOfUsers).subscribe((i) => {
      console.log(i);
    })
  }
  profile(){
    this.router.navigateByUrl('dashboard/profile')
  }
  getScreenWidth:any;
  getScreenHeight:any;
  dashBoardView:boolean=false
  @HostListener('window:resize',['$event']) onWindowResize(){
    this.getScreenWidth=window.innerWidth;
    this.getScreenHeight=window.innerHeight;
    if(this.getScreenWidth<=755){
      this.dashBoardView=true
    }
    if(this.getScreenWidth>=755){
      this.dashBoardView=false
    }
  }
}
