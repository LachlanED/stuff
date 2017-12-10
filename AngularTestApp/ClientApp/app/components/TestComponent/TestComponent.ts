import { Component } from '@angular/core';

@Component({
    selector: 'fooer',
    templateUrl: './TestComponent.html'
})
export class TestComponent {
    public currentCount = 2;

    public incrementCounter() {
        this.currentCount++;
    }
}
