import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {User} from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public TOKEN;Username;

  

   user : User[];

  constructor(public loginservice:LoginService, private router:Router,private toastr:ToastrService) { }

  ngOnInit() {

    this.TOKEN=this.loginservice.getToken();
    console.log('hi12',this.TOKEN);
    this.Username=this.loginservice.getUsername();
    console.log('hi12',this.Username);

    this.getuser(this.TOKEN,this.Username);
    
  }


  getuser(TOKEN,Username){

    this.loginservice.getuserinfo(this.TOKEN,this.Username)
    .subscribe(
      (response:any)=>{
             console.log(response); 
             console.log(response.user)
             this.user=response.user;
              // console.log(this.user.profilepicture) ;
            
            
            
            });
  }
  


}
 

