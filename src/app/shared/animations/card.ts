import { animate, style, transition, trigger } from "@angular/animations";

export const CardAnimations = trigger('card', [
    transition(':enter', [
        style({ marginTop: '-150px', opacity: 0  }),
        animate(100, style({ marginTop: '20px', opacity: .4, bottom: 0 })),
        animate(200, style({ marginTop: '0px', opacity: 1, bottom: 0 }))
    ])
]);
