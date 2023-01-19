import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import packageJson from 'package.json';

@Component({
    selector: 'enterprise-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
    currentYear: number = new Date().getFullYear();
    version: string = packageJson.version;

    constructor() {}

    ngOnInit(): void {}
}
