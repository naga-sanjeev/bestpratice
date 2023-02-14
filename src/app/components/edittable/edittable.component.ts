import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments2/environment';
@Component({
  selector: 'app-edittable',
  templateUrl: './edittable.component.html',
  styleUrls: ['./edittable.component.scss'],
  providers: [MessageService]
})
export class EdittableComponent implements OnInit {

  constructor(private service: DataService, private messageService: MessageService,private router: Router) { }
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
    const reqBody2 = {
      "Email": product.Email,
      "PhoneNumber": product.PhoneNumber,
      "Age": null,
      "Role": product.Role,
      "CreatedBy": "null",
      "username": product.username,
      "Id": product.Id
    }
    console.log(reqBody2);

    const reqBody = {
      "Email": product.Email,
      "PhoneNumber": product.PhoneNumber,
      "Role": product.Role,
      "username": product.username
    }
    this.service.updateUserData(environment.updateUserData,product.Id, reqBody).subscribe((i) => {
      console.log(i);
      setTimeout(() => {
        this.router.navigateByUrl('/dashboard/editTable')
      }, 1000)
      this.messageService.add({ severity: 'success', summary: 'Updated successully', detail: '', life: 1000 });
    })
  }
  onRowEditCancel(product, index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.products2[product.id];
  }
  username:String
  Id:String
  Search(){
    console.log(this.Id)
    if(this.username=="" || this.Id==""){
      this.ngOnInit();
    }
    else{
      this. usersData=this. usersData.filter(res=>{
        console.log(res.Id)
        console.log(typeof(res.Id),"res")

        console.log( res.Id.num.toString().toLocaleLowerCase().match(this.Id.toLocaleLowerCase()))
         return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase()) ||  res.Id.num.toString().toLocaleLowerCase().match(this.Id.toLocaleLowerCase())
      })
    }
  }
}
