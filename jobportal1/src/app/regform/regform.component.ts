import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
 import { State} from '../state';
import {RegistrationService} from '../registration.service';
import {StatelistService} from '../statelist.service';
import { Observable, of, throwError } from 'rxjs';
import{AbstractControl} from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';
import { MustMatch} from '../shared/mustmatchvalidator';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { UniqueemailcheckService } from '../uniqueemailcheck.service';
import { UniqueusernamecheckService } from '../uniqueusernamecheck.service';
import {LoginService} from '../login.service';
import { element } from '@angular/core/src/render3/instructions';

import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

const profileurl1 = 'http://localhost:3000/myapi/profile/'; // url accepting file(image) api in node
@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: profileurl1, itemAlias: 'profilepicture',allowedMimeType:[ 'image/jpeg','image/png'],maxFileSize: 2*1024*1024 });




 registerForm:FormGroup;

 hobbiesPreferences = [
  { id: 1, genre: 'Cricket' },
  { id: 2, genre: 'Dancing' },
  { id: 3, genre: 'Singing' },
  { id: 4, genre: 'Acting' }
];


 submitted = false;

 states : State[];

 public emailstatus;usernamestatus;
  
  constructor(private formBuilder: FormBuilder, private _registrationservice : RegistrationService,private statelistservice:StatelistService,private uniqueemailcheckservice:UniqueemailcheckService,private uniqueusernamecheckservice:UniqueusernamecheckService,public loginservice:LoginService ,public toastr:ToastrService ) { }

 
  ngOnInit() {

    this.getstates()
    
    const formControls = this.hobbiesPreferences.map(control => new FormControl(false));

    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      birth_date:['', Validators.required],
      gender:['', Validators.required],
      hobbies:new FormArray(formControls),
      phone_no:['', [Validators.required, Validators.maxLength(10)]],
      address:[''],
      city:['', Validators.required],
      state:['', Validators.required],
      zipcode:['', [Validators.required,Validators.pattern("^[0-9]{6}")]],
      email: ['', [Validators.required, Validators.email]],

      
      password: ['', [Validators.required, Validators.pattern("^[a-zA-Z](?=.*[0-9])(?=.*[@$!%*#?&]).{4,8}$")]],
     confirmpassword: ['',Validators.required],
     username: ['',[Validators.required, Validators.pattern("^[a-z0-9@$!%*#?&.]+$")]], //
     profilepicture:[''],
    
  },{validator:MustMatch('password','confirmpassword')});

  // uploading file
  
  

  this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };

  }


  

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }



  onSubmit() {
   this.submitted = true;
   console.log(this.registerForm);
   console.log(this.registerForm.value);

  // // get the gener value of selected checkbox and set it to hobbies controls
  
  const selectedPreferences = this.registerForm.value.hobbies
      .map((checked, index) => checked ? this.hobbiesPreferences[index].genre : '');
     
   
    console.log(selectedPreferences) ; 

   this.registerForm.controls['hobbies'].patchValue(selectedPreferences);
   console.log('after selectedpreference',this.registerForm.value) ; 

   // add users data to database using service

   this._registrationservice.register(this.registerForm.value)
        .subscribe(
          response =>{ 
            console.log( 'success!',response);
            this.toastr.success("You have register data successfully");
          },
          error => {
            console.log('error!',error);
            this.toastr.error("Some error in register your data ");
          }
        );


   // stop here if form is invalid
   if (this.registerForm.invalid) {
       return;
   }

  
}

// get states list using service

getstates() {

  this.statelistservice.getstateslist().subscribe( responseData=> {
         console.log(responseData);
         this.states = responseData.docs;
     });



}




// check emailfield is unique or not
uniqueemail(){
  console.log(this.registerForm.value)
  this.uniqueemailcheckservice.check(this.registerForm.value)
    .subscribe( 
      
    response=> { console.log(response)
     if(response.status === false){

      this.emailstatus = true;

     }
    },
    error=>console.log('error!',error)
    );

  }

 
  // check usernamefield is unique or not

  uniqueusername(){
    console.log(this.registerForm.value)
    this.uniqueusernamecheckservice.check(this.registerForm.value)
      .subscribe( 
        
      response=>  {
        console.log(response)

        if(response.status === false){

          this.usernamestatus=true;
        }
      },
      error=>console.log('error!',error)
      );
  
    }

  

}


