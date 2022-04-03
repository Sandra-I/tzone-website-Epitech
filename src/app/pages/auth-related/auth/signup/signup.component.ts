import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/providers/user.service';
import { CardAnimations } from 'src/app/shared/animations';
import { translateString } from 'src/app/shared/custom-translation/custom-translation.pipe';
import { FormComponent } from 'src/app/shared/form-component';
import { Toastr } from 'src/app/shared/notification';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [CardAnimations]
})
export class SignupComponent extends FormComponent<User> {
  public passwordsOk = false;

  constructor(protected formProvider: UserService) {
    super()
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      firstName: new FormControl('', Validators.required), 
      lastName: new FormControl('', Validators.required), 
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

  submitForm(): void {
    const form = this.mainForm.value;
    this.subscribeTo(this.formProvider.logIn(form), res => {
      setTimeout(async () => {
        this.loadingOff$.next();
        this.formProvider.getMe("Bienvenue");
      }, 500);
    })
  }

  checkPassword(pwd1: string, pwd2: string): void {
    this.passwordsOk = pwd1 === pwd2;
  }





}