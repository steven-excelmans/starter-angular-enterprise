import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'enterprise-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
