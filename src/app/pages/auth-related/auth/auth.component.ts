import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-auth-component',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    public currentCard!: 'login' | 'register' | 'reset' | 'redirect';

    constructor(private route: ActivatedRoute) {

    }


    ngOnInit(): void {
        this.currentCard = this.route.snapshot.url[0].path as 'login' | 'register' | 'reset' | 'redirect';
    }

}