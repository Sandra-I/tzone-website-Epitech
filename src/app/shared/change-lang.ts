import { BehaviorSubject } from "rxjs";

export class ChangeLang {
    public static readonly langChanged$ = new BehaviorSubject<void>(undefined);
}