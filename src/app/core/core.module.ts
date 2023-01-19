import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
    declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
    imports: [BrowserModule, BrowserAnimationsModule, RouterModule],
    exports: [MainLayoutComponent]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
        if (coreModule) {
            throw new Error('Core module should only be imported in the root module.');
        }
    }
}
