import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'enterprise-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
