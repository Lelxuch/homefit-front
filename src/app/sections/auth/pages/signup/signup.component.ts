import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {PermissionService} from "../../../../core/services/permission.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private permissionService: PermissionService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      fullName: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      age: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.signup(this.loginForm.getRawValue())
        .subscribe((res: any) => {
          this.router.navigateByUrl(this.permissionService.defaultSection);
        }, (err: any) => {
        })
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
