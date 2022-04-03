import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Requester } from "./requester";
import { UserService } from "./user.service";

@Injectable()
export class GoogleAuthService extends Requester {
  public url = 'google';
  private _popup!: Window;
  public readonly open$ = new BehaviorSubject<boolean>(false);

  constructor(private userService: UserService, private router: Router) {
    super();
  }

  public logIn(path?: string): void {
    this._popup = window.open(this.getUrl(), "window", "width=500,height=500") as Window;
    let callback = (result: MessageEvent) => {
      const token = result.data.token;
      if (token) {
        localStorage.setItem('token', token);
        this.userService.getMe(true, path);
      }
      else this.router.navigate([])
    }
    window.addEventListener('message', callback);
    const interval = setInterval(() => {
      if (this._popup?.closed) {
        window.removeEventListener('message', callback);
        clearInterval(interval);
      }
    })
  }
}