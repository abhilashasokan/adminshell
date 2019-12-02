import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/Authentication.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  private redirectUrl = environment.mainPageUrl;
  isErrorVisible = false;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private change: ChangeDetectorRef,
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
    this.authenticationService.login(this.f.username.value, this.f.password.value, true).pipe(first())
    .subscribe(
      data => {
        this.router.navigateByUrl(this.redirectUrl);
      },
      error => {
        this.isErrorVisible = true;
        this.error = error;
        this.change.markForCheck();
      });
  }
}
