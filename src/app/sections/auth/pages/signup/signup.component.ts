import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {NzMessageService} from "ng-zorro-antd/message";

import {AuthService} from "../../../../core/services/auth.service";
import {PermissionService} from "../../../../core/services/permission.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private permissionService: PermissionService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      fullName: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      age: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  signup(): void {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.getRawValue())
        .subscribe((res: any) => {
          console.log(res);
          this.router.navigateByUrl('/signin');
        }, (err: any) => {
        })
    } else {
      Object.values(this.signupForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
