import { animate, state, style, transition, trigger } from '@angular/animations';

const toggleMenuAnimation = trigger('toggleMenuAnimation', [
    state(
        'in',
        style({
            transform: 'translateX(100%)'
        })
    ),
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('400ms ease-in', style({ transform: 'translateX(0)', display: 'flex' }))
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0)', display: 'flex' }),
        animate('350ms ease-out', style({ transform: 'translateX(100%)' }))
    ])
]);

export { toggleMenuAnimation };
