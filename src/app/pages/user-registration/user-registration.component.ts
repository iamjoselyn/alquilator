import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/user.model';
import { UserRegistrationService } from 'src/app/shared/services/user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup

  constructor(private registrationFb: FormBuilder,
              private router: Router,
              private userService: UserRegistrationService) {
    this.createRegistrationForm();
  }

  ngOnInit(): void { }

  get invalidFirstName(): boolean {
  return this.registrationForm.get("firstName").invalid && this.registrationForm.get("firstName").touched;
  };

  get invalidLastName(): boolean {
  return this.registrationForm.get("lastName").invalid && this.registrationForm.get("lastName").touched;
  };
  
  get invalidEmail(): boolean {
  return this.registrationForm.get("email").invalid && this.registrationForm.get("email").touched;
  };

  get invalidPassword(): boolean {
  return this.registrationForm.get("password").invalid && this.registrationForm.get("password").touched;
  };

  get invalidCity(): boolean {
  return this.registrationForm.get("city").invalid && this.registrationForm.get("city").touched;
  };

  get invalidProvince(): boolean {
  return this.registrationForm.get("province").invalid && this.registrationForm.get("province").touched;
  };
  get invalidZipCode(): boolean {
  return this.registrationForm.get("zipCode").invalid && this.registrationForm.get("zipCode").touched;
  };

  createRegistrationForm(): void {
    this.registrationForm = this.registrationFb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(70), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$")]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern("^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$")]],
      city: ["", [Validators.required, Validators.minLength(3)]],
      province: ["", [Validators.minLength(3)]],
      zipCode: ["", [Validators.minLength(5), 
        // Validators.pattern("/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/")
      ]]
    });
  };
  

  saveRegisterForm(): void {
    if(this.registrationForm.status === "INVALID"){
      alert("Por favor, rellena los campos requeridos para contactar con el anunciante.");
    } else {

      console.log("Todo bien: FORMULARIO: ", this.registrationForm.value);

      // this.register(this.registrationForm);
      // this.userService.register(this.registrationForm);
  
      this.userService.register("http://localhost:3000/users", this.registrationForm.value)
        .then(data => {
          console.log(data);
          
        });

      this.registrationForm.reset();
      // this.router.navigateByUrl("/user-area");

    }

  };

  // register(form) {
  //   console.log(form.value);
  //   this.userService.register(form.value).subscribe((res) => {
  //     this.router.navigateByUrl('/user-area');
  //   }, error => {
  //     console.log("ERROR: ", error);
      
  //   });
  // }
}


