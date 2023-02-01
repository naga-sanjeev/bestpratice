import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { AppMainComponent } from 'src/app/app.main.component';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,private service:DataService,private messageService: MessageService) { }

  currenYearFormat: number = new Date().getFullYear();
  title = 'TaskManagement';
  items: MenuItem[] = [];
  item2: MenuItem[] = [];
  dot: false | undefined;
  role:string
  model=[]
  ngOnInit(): void {
   this.getUsersData()
   this.onClick();
   this.sideBar();
  }
  sideBar(){
    this.items = [
      {
        label: 'Home',
        // icon: 'pi pi-pw pi-file',
        routerLink: ['/dashboard/root']
      },
      {
        label: 'charts',
        routerLink: ['/dashboard/charts']
      },
      {
        label: 'forms',
        routerLink: ['/dashboard/forms']
      },
      {
        label: 'table',
        routerLink: ['/dashboard/admin']
      },
      // {
      //   label: 'Reporting',
      //   icon: 'pi pi-fw pi-cog',
      //   items: [
      //     {
      //       label: 'Add project',
      //       icon: 'pi pi-fw pi-pencil',
      //       items: [
      //         { label: 'Save', icon: 'pi pi-fw pi-save' },
      //         { label: 'Update', icon: 'pi pi-fw pi-save' },
      //       ]
      //     },
      //     {
      //       label: 'add task',
      //       icon: 'pi pi-fw pi-pencil',
      //       items: [
      //         { label: 'Delete', icon: 'pi pi-fw pi-minus' }
      //       ]
      //     }
      //   ]
      // }
    ];  
  }
  getUsersData(){
    this.service.getApi(environment.listOfUsers).subscribe((i)=>{
      console.log(i);
    })
  }
  onClick(){
    this.role = sessionStorage.getItem('role')
    if (this.role == 'admin') {
      this.model = [
        {
          items: [            
            {
              label:"List of users",
              icon:"",
              // routerLink:["/dashboard/admin"]
            }
          ],
        }
      ];
    }
  }
}
