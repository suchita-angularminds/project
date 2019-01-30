import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ForgotpasswordService} from '../forgotpassword.service';
import { SendemailService } from '../sendemail.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpasswordForm: FormGroup;
  submitted = false;
  public userpass;
  
  constructor(private formBuilder: FormBuilder,private forgotpasswordservice:ForgotpasswordService,private router:Router,private toastr:ToastrService,private sendemailservice:SendemailService) { }

  ngOnInit() {

    this.forgotpasswordForm = this.formBuilder.group({
      
      email: ['',Validators.required],
     
     
    
  });
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.forgotpasswordForm);
    console.log(this.forgotpasswordForm.value);

    this.forgotpasswordservice.emailcheck(this.forgotpasswordForm.value)
    .subscribe(
      (res: any) => {
        this.userpass=res.user;  
         if(res.status !== true)
         {
            console.log("Email is exist");
            this.sendemailservice.sendmail(this.userpass).subscribe(
              data => {
                console.log("Email  sent",data);
                this.toastr.success("password reset link has been sent to your email ID");
            },
              error => {
                console.log("Email not sent",error);
                this.toastr.error ("Some error in sending reset link");
               
              }
            )
         }
        
      })

   // stop here if form is invalid
   if (this.forgotpasswordForm.invalid) {
       return;
   }
   
  }

}
