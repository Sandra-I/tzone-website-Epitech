import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { PLANS } from 'src/app/providers/plan.service';
import { UserService } from 'src/app/providers/user.service';
import { translateString } from 'src/app/shared/custom-translation/custom-translation.pipe';
import { FormComponent } from 'src/app/shared/form-component';
import { Toastr } from 'src/app/shared/notification';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent extends FormComponent<User> {

  constructor(protected formProvider: UserService) {
    super();
  }

  beforeInit(): void {
    this.subscribeTo(this.formProvider.currentUser$, user => {
      if (user) {
        this.data = user;
        this.data.billing = user.billing.map(billing => {
          billing.planName = PLANS.find(_ => _.id == billing.id)?.name;
          return billing;
        })
        this.initForm();
      }
    });
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      firstName: new FormControl(this.data?.firstName, Validators.required),
      lastName: new FormControl(this.data?.lastName, Validators.required),
      email: new FormControl(this.data?.email, [Validators.required, Validators.email]),
    })
  }

  submitForm(): void {
    setTimeout(() => {
      this.formProvider.update(this.data?.id as string, this.mainForm.value).subscribe(res => {
        this.loadingOff$.next();
        Toastr.success(translateString('Modification enregistrée', ['account', 1])!)
      })
    }, 1000)

  }

}
