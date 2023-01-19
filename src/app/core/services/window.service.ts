import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WindowService {
    constructor() {}

    get isRetina(): boolean {
        return window.devicePixelRatio >= 2;
    }
}
