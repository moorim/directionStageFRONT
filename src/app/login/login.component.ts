import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Admin} from "../admin";
import {AuthenService} from "../authen.service"
import {Router} from  '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin:Admin={"email":"","password":""};
  admins:Admin[]=[]
  msgErreur:string=""
  constructor( private authenService:AuthenService,
               private router :Router){
                
                }

  ngOnInit(): void {
    this.getAdmins()
  }
  
  login(){
    this.authenService.getAdmin().subscribe(admins =>admins.forEach(
      adm => {
        if (adm.email==this.admin.email && adm.password==this.admin.password){
          this.router.navigateByUrl("/dashboard")}
        else this.msgErreur="connexion failed  check your username or password" }))
  }
  getAdmins(){
    this.authenService.getAdmin().subscribe(adm => adm.forEach(a => console.log(a.email,a.password)))
  }
  
}
