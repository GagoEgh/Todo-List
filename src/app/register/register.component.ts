import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AppServiceService } from '../app-service.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({})

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private appService: AppServiceService
  ) { }

  ngOnInit(): void {
    this.registerInit()
  }

  private registerInit() {
    this.registerForm = this.fb.group({
      first: ['', [Validators.required]],
      last: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }

  public register(): void {
    const user: User = {} as User;

    if (this.registerForm.valid) {
      user.id = 24,
        user.isActive = false;
      user.firstName = this.registerForm.get('first')?.value;
      user.lastName = this.registerForm.get('last')?.value;
      user.password = this.registerForm.get('password')?.value;
      user.email = this.registerForm.get('email')?.value;

      this.spinner.show();
      setTimeout(() => {
        this.appService.users.values.push(user);
        this.router.navigate(['/login']);
        this.spinner.hide();
      }, 1000)
    }

  }
}
