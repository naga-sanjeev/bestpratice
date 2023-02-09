import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';
@Component({
  selector: 'app-edittable',
  templateUrl: './edittable.component.html',
  styleUrls: ['./edittable.component.scss'],
  providers:[MessageService]
})
export class EdittableComponent implements OnInit {

  constructor(private service:DataService,private messageService:MessageService) { }
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
   console.log(product.Email);
   const reqBody2={
       "Email":product.Email ,
    "PhoneNumber": product.PhoneNumber,
    "Age": null,
    "Role":product.Role,
    "CreatedBy": "null",
    "username": product.username,
    "Id":product.Id
   }
   console.log(reqBody2);
   
   const reqBody = {
    "Email":product.Email ,
    "PhoneNumber": product.PhoneNumber,
    "Role":product.Role,
    "username": product.username
  }
  this.service.updateUserData(environment.updateUserData,product.Id,reqBody).subscribe((i:any)=>{
    console.log(i);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data is updated' });
  })
  }
  onRowEditCancel(product, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.products2[product.id];
  }
}
