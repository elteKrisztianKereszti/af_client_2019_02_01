import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  public message: string;
  public hidePassword = true;

  public form: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]],
    password: ['', [ Validators.required ]],
  });

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  public async onSubmit(): Promise<void> {
    try {
      this.message = null;
      await this.authService.login(this.username.value, this.password.value);
      if (this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl]);
      } else {
        this.router.navigate(['/']);
      }
    } catch (e) {
      this.message = 'Cannot log in!';
    }
  }
}
