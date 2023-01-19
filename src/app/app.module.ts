import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
