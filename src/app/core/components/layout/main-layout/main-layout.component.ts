import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { WindowService } from '../../../services/window.service';

@Component({
    selector: 'enterprise-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit {
    @HostBinding('class.!antialiased')
    private get isRetina(): boolean {
        return this.windowService.isRetina;
    }

    constructor(private windowService: WindowService) {}

    ngOnInit(): void {}
}
