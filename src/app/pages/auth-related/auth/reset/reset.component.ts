import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/providers/user.service';
import { CardAnimations } from 'src/app/shared/animations';
import { FormComponent } from 'src/app/shared/form-component';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  animations: [CardAnimations]
})
export class ResetComponent extends FormComponent<User>  implements OnInit {
  public emailSend = false;

  constructor(protected formProvider: UserService) {
    super()
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  submitForm(): void {
    const email = this.mainForm.value.email;
    this.subscribeTo(this.formProvider.resetPassword(email), res => {
      setTimeout(() => {
        this.loadingOff$.next();
        this.emailSend = true;
      }, 500);
    })
  }




}
