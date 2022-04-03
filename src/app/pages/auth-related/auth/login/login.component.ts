import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/providers/user.service';
import { CardAnimations } from 'src/app/shared/animations';
import { translateString } from 'src/app/shared/custom-translation/custom-translation.pipe';
import { FormComponent } from 'src/app/shared/form-component';
import { Toastr } from 'src/app/shared/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [CardAnimations]
})
export class LoginComponent extends FormComponent<User> {
  private url?: string;

  constructor(protected formProvider: UserService, protected route: ActivatedRoute) {
    super()
  }
  
  beforeInit(): void {
    this.route.params.subscribe(async (params: Params) => {
      this.route.queryParams.subscribe(async (queryParams) => {
        this.url = params.url || '';
      });
    });
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  submitForm(): void {
    const form = this.mainForm.value;
    this.subscribeTo(this.formProvider.logIn(form), res => {
      localStorage.setItem('token', '1')
      setTimeout(() => {
        this.loadingOff$.next();
        this.formProvider.getMe(undefined, this.url);
      }, 500);
    })
  }





}
