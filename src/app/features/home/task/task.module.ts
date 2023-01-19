import { NgModule } from '@angular/core';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [TaskComponent],
    imports: [SharedModule, TaskRoutingModule]
})
export class TaskModule {}
