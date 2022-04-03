import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { StripeService } from 'src/app/providers/stripe.service';
import { UserService } from 'src/app/providers/user.service';
import { SubscriberComponent } from 'src/app/shared/subscriber-component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent extends SubscriberComponent implements OnInit {
  public user!: User;

  constructor(
    protected userService: UserService,
    protected stripeService: StripeService,
    protected router: Router
  ) {
    super();
  }

  public ngOnInit(): void {
    this.subscribeTo(this.userService.currentUser$, user => {
      if (user) {
        this.user = user;
      }
      else {
        const queryString = window.location.search;
        const parameters = new URLSearchParams(queryString);
        const value = parameters.get('token');
        if (value) {
          localStorage.setItem('token', value);
          this.router.navigate([]);
          console.log(window.location);
          this.userService.getMe(false, window.location.pathname);
        }
      }
    })
  }

  public generateInvoice(id: string): void {
    this.stripeService.getInvoice(id).subscribe((res: Blob) => {
      const a = document.createElement("a");
      const blob = new Blob([res], { type: 'application/pdf' })
      a.href = URL.createObjectURL(blob);
      a.target = "_blank";
      a.click();
    })
  }
}
