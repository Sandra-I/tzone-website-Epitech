import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stripe as IStripe, StripeCardElement } from '@stripe/stripe-js';
import { Subject } from 'rxjs';
import { Plan } from 'src/app/models/plan';
import { User } from 'src/app/models/user';
import { PlanService } from 'src/app/providers/plan.service';
import { StripeService } from 'src/app/providers/stripe.service';
import { UserService } from 'src/app/providers/user.service';
import { ChangeLang } from 'src/app/shared/change-lang';
import { translateString } from 'src/app/shared/custom-translation/custom-translation.pipe';
import { Toastr } from 'src/app/shared/notification';
import { SubscriberComponent } from 'src/app/shared/subscriber-component';
import config from "src/config";
declare const Stripe: (key: string) => IStripe;
const stripe = Stripe(config.stripe_key)

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent extends SubscriberComponent implements OnInit, AfterViewInit {
  public plan!: Plan;
  public annual!: boolean;
  public loadingOff$ = new Subject<void>();
  public paid = false;
  public cardComplete = false;
  public ownerName?: string;
  public user!: User;
  public card!: StripeCardElement;
  public conditionOK = false;

  constructor(
    private planService: PlanService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private stripeService: StripeService
  ) {
    super();
  }

  ngOnInit() {
    const { id, annual } = this.route.snapshot.params;
    this.subscribeTo(this.userService.currentUser$, user => {
      if (user) {
        this.user = user;
        if (this.user.planId) {
          if (this.user.planId == id) {
            this.router.navigateByUrl('offers');
          }
          else {
            this.user.plan = this.planService.plans.find(_ => _.id == user.planId);
          }
        }
        const plan = this.planService.plans.find(current => current._id == id);
        if (plan) {
          this.plan = plan;
          this.annual = annual == 'true';
        }
        else this.router.navigateByUrl('/offers');
      }
    })
  }

  ngAfterViewInit() {
    const elements = stripe.elements({ locale: currentLang });
    const styleCard = {
      'style': {
        'base': {
          'fontFamily': 'Montserrat, sans-serif',
          'fontSize': '18px',
          'color': '#C1C7CD',
          '::placeholder': {
            'color': 'white'
          },
        },
        'Invalid': { 'color': '#fa3838' },
      }
    };
    // Create an instance of the card UI component
    this.card = elements.create('card', styleCard);
    this.card.mount('#card_element');
    this.subscribeTo(ChangeLang.langChanged$, () => elements.update({ locale: currentLang }));
    this.card.on('change', (event) => this.cardComplete = event.complete);
  }

  public async pay(): Promise<void> {
    this.loadingOff$.next();
    this.stripeService.initPayment({planId: this.plan._id!, annual: this.annual}).subscribe(res => {
      if (res?.result?.clientSecret) {
        stripe.confirmCardPayment(res.result.clientSecret, {
          payment_method: {
            card: this.card,
            billing_details: {
              name: this.ownerName
            }
          }
        }).then(() => {
          this.loadingOff$.next();
          this.stripeService.addPayment({ planId: this.plan._id!, annual: this.annual }).subscribe(() => {
            this.paid = true;
            setTimeout(() => this.userService.getMe(false), 1000);
          });
        }, () => this.paymentError())
      }
      else this.paymentError();
    }, this.paymentError);
    // stripe.confirmCardPayment();
    // this.paid = true;
    //   setTimeout(() => this.router.navigateByUrl(''), 2500)
    // }, 2000)
  }

  public paymentError(err?: Error): void {
    err && console.error(err);
    
    Toastr.error(translateString('Une erreur est survenue'))
    this.loadingOff$.next()
  }

  public setOwnerName(event: EventTarget | null): void {
    this.ownerName = (event as HTMLInputElement)?.value;
  }

  conditionInputChange(event: Event) {
    this.conditionOK = (event.target as HTMLInputElement).checked;
  }
}
