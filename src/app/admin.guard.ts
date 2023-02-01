import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { environment } from 'src/environments2/environment';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  userToken: string
  constructor(private service: DataService) { }
  canActivate() {
   
    console.log("fdg");
    this.service.retriveMessage().subscribe((res)=>console.log(res))
    this.service.getRole().subscribe((res)=>console.log(res))
    return true
  }
  ngOnInit(){
  }
}
