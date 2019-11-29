import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/Authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.buildLoginForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  private buildLoginForm(): FormGroup {
    return this.formBuilder.group({
      username: ['anoopjohn02@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.submitted = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value, true).subscribe();
  }
}
