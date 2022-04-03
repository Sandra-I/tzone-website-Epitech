import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { GoogleAuthService } from 'src/app/providers/google-auth.service';
import { UserService } from 'src/app/providers/user.service';
import { ChangeLang } from 'src/app/shared/change-lang';
import { SubscriberComponent } from 'src/app/shared/subscriber-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends SubscriberComponent implements OnInit {
  public isLogged = false;
  public isChrome = isChrome;
  public countries: Lang[] = ['fr', 'en'];
  public deployLangSelector = false;
  public currentUser?: User;
  public menuOpened = false;
  public currentRoute!: string;
  public authLoading!: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private googleAuthService: GoogleAuthService) {
    super();
  }

  ngOnInit(): void {
    this.subscribeTo(this.userService.currentUser$, res => {
      this.currentUser = res || undefined;
    });
    this.subscribeTo(this.userService.loading$, res => {
      this.authLoading = res;
    });
  }
  getCurrentLang(): Lang {
    return currentLang;
  }

  selectLang(lang: Lang): void {
    currentLang = lang;
    ChangeLang.langChanged$.next();
    this.hideLangSelector();
  }

  logIn(): void {
    this.googleAuthService.logIn();
  }

  logout(): void {
    this.userService.currentUser$.next(null);
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  @HostListener('document:click') hideLangSelector(): void {
    this.deployLangSelector = false;
    this.menuOpened = false;
  }

}
