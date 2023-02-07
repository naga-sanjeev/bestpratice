import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit(): void {

    this.data = {
      labels: ['saikumar','yeswanth','prasad'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "green",
                  "red",
                  "black"
              ]
          }
      ]
  };

  }

}
