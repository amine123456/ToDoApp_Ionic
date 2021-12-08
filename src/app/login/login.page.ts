import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //variable d'authentification
  public email: any;
  public password: any;

  constructor(
    public router:Router,
    public service:HomeService
  ) { }

  ngOnInit() {
  }
//fonction de login
  login(){
    this.service.loginWithEmail({email:this.email,password:this.password}).then(res=>{
     this.router.navigateByUrl('home' , {replaceUrl: true})
    },err=>{
      alert(err.message)
      console.log(err);
    })
  }

  signup(){
    this.router.navigateByUrl('signup');
  }

}
