import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import {UserService} from '../user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  
  

constructor(private formBuilder: FormBuilder,public loginservice:LoginService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {

      this.loginForm = this.formBuilder.group({
      
      username: ['',Validators.required],
      password: ['', Validators.required],
     
    
       });

      if(this.loginservice.isLogged()){
  
      this.router.navigateByUrl('/dashboard');
      this.toastr.success('You have already Logged In')

       }

    
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm);
    console.log(this.loginForm.value);

    this.loginservice.logincheck(this.loginForm.value)
        .subscribe(
          response => { 
            // console.log('success!',response);
            // console.log('success!',response.Token);

            if (response.Token){
              console.log( 'success!',response);
              this.toastr.success('You have logged in successfuly')
              this.loginservice.setToken(response.Token);
              this.loginservice.setUsername(response.username);
              this.router.navigateByUrl('/dashboard');
                } },
           

          error => {
            console.log('error!',error);
            this.toastr.error('You are not valid user ');
         
            });
      
          // stop here if form is invalid
         if (this.loginForm.invalid) {
              return;
            }
   
        }
}
