import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) { }
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
}
