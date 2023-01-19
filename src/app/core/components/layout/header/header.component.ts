import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { toggleMenuAnimation } from '../../../animations/animations';

@Component({
    selector: 'enterprise-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [toggleMenuAnimation]
})
export class HeaderComponent implements OnInit {
    isMenuOpen: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
