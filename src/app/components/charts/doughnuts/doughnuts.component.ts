import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnuts',
  templateUrl: './doughnuts.component.html',
  styleUrls: ['./doughnuts.component.scss']
})
export class DoughnutsComponent implements OnInit {

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
