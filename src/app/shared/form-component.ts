import { OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { Provider } from "../providers";
import { AbstractComponent } from "./abstract-component";
import { injector } from "./injector";
import { SubscriberComponent } from "./subscriber-component";

@AbstractComponent()
export abstract class FormComponent<T> extends SubscriberComponent implements OnInit {
    protected abstract formProvider: Provider<T>;
    protected formBuilder: FormBuilder;
    protected router: Router;
    public data?: T | null;
    public mainForm!: FormGroup;
    public loadingOff$ = new Subject<void>();

    constructor() {
        super();
        this.formBuilder = injector.get(FormBuilder);
        this.router = injector.get(Router);
    }

    async ngOnInit(): Promise<void> {
        await this.beforeInit();
        this.mainForm = this.initForm();
        await this.afterInit();
    }

    protected beforeInit(): void | Promise<void> { }

    protected afterInit(): void | Promise<void> { }

    protected abstract initForm(): FormGroup;

    protected abstract submitForm(): void;

}