import { Component, OnInit } from '@angular/core';
import { ChangeLang } from 'src/app/shared/change-lang';
import { SubscriberComponent } from 'src/app/shared/subscriber-component';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent extends SubscriberComponent implements OnInit {
  public lang = currentLang;
  constructor() {
    super()
  }

  ngOnInit() {
    this.subscribeTo(ChangeLang.langChanged$, () => this.lang = currentLang)
  }

}
