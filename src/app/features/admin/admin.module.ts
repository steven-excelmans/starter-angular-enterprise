import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [AdminComponent],
    imports: [SharedModule, AdminRoutingModule]
})
export class AdminModule {}
