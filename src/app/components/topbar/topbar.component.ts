import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
 public sideBar:boolean=true;
 public pannelMenu:boolean=true;
  constructor(private service:DataService) { }
  visibleSidebar1:boolean
  items: MenuItem[] = [];
  item2: MenuItem[] = [];
  ngOnInit(): void {
  }
  toggle() {
    this.sideBar=!this.sideBar
    console.log(this.sideBar);
    this.service.notifyOther({refresh:true})
    this.service.sideBar.next(this.sideBar)
  }
  mobile(){
    this.pannelMenu=!this.pannelMenu
    console.log(this.pannelMenu);
    this.service.pannelMenu.next(this.pannelMenu)
  }
  getScreenWidth:any;
  getScreenHeight:any
  mobileView:boolean=false
  @HostListener('window:resize',['$event']) onWindowResize(){
    this.getScreenWidth=window.innerWidth;
    this.getScreenHeight=window.innerHeight;
    if(this.getScreenWidth<=755){
     this.mobileView=true
    }
    if(this.getScreenWidth>=755){
      this.mobileView=false
    }
  }
}
