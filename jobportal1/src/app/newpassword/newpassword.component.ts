import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotpasswordService } from '../forgotpassword.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  newpasswordForm:FormGroup;
  submitted = false;
  public email;

  constructor(private fb:FormBuilder,private forgotpasswordservice:ForgotpasswordService,private route:ActivatedRoute,private toastr:ToastrService ) { }

  ngOnInit() {

    this.newpasswordForm = this.fb.group({
      
      password: ['',Validators.required],
      confirmpassword:['',Validators.required],
     
  });

  this.email =this.route.snapshot.paramMap.get('email');

}

onSubmit() {
  this.submitted = true;
  console.log(this.newpasswordForm);
  console.log(this.newpasswordForm.value);
  console.log(this.newpasswordForm.value.password);
  console.log(this.email);

  this.forgotpasswordservice.updatepassword({"password":this.newpasswordForm.value.password,"email":this.email})
  .subscribe(
    response => {
      console.log('success',response);
      console.log('new password updated successfully');
      this.toastr.success('new password updated successfully');
    },
    error => {
      console.log('Error',error);
      console.log('Error in updating new password ');
      this.toastr.error('Error in updating new password ');
    }
      
      
    );

 // stop here if form is invalid
 if (this.newpasswordForm.invalid) {
     return;
 }
 
}
}
