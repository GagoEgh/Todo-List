import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AppServiceService } from '../app-service.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  noData = false;
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private appService: AppServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginInit()
  }

  private loginInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  public onSubmit(): void {
     const isUser = this.appService.users.values.find((item) => {
      return item.password === this.loginForm.get('password')?.value && item.email === this.loginForm.get('email')?.value
    })

    if (isUser) {
      this.spinner.show()
      setTimeout(() => {
        this.spinner.hide();
        this.router.navigate(['/home'])
      }, 1000)
    }else{
      this.noData = true
    }

  }
}
