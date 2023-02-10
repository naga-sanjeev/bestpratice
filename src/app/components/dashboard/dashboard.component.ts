import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
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
  dot: false | undefined;
  role: string
  profileMode = 'popup';
  model = []
  ripple: boolean;
  ngOnInit(): void {
    this.getUsersData()
    // this.onClick();
    this.sideBar();
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
  getUsersData() {
    this.service.getApi(environment.listOfUsers).subscribe((i) => {
      console.log(i);
    })
  }
  profile(){
    this.router.navigateByUrl('dashboard/profile')
  }
}
