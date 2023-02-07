import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';
@Component({
  selector: 'app-edittable',
  templateUrl: './edittable.component.html',
  styleUrls: ['./edittable.component.scss']
})
export class EdittableComponent implements OnInit {

  constructor(private service:DataService) { }
  usersData: any = []
  ngOnInit(): void {
  this.getTableData()
  }
  getTableData() {
    this.service.getApi(environment.listOfUsers).subscribe((i: any) => {
      console.log(i.respones);
      this.usersData = i.respones
    })
  }
  products1: any[];

  products2: any[];

  statuses: SelectItem[];
  clonedProducts: { [s: string]: any; } = {};
  onRowEditInit(product) {
    this.clonedProducts[product.id] = { ...product };
  }
  onRowEditSave(product) {
   console.log(product);
   const reqBody = {
    "Email": product.Email,
    "PhoneNumber":product.PhoneNumber,
    "Role": product.Role,
    "username": product.username,
  }
  
    // if (product.price > 0) {
    //   delete this.clonedProducts[product.id];
    //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
    // }
    // else {
    //   this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
    // }
  }
  onRowEditCancel(product, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.products2[product.id];
  }
}
