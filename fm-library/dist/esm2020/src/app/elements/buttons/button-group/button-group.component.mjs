import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../button/button.component";
export class ButtonGroupComponent {
    constructor() {
        this.light = false;
        this.localValue = 'localValue';
        this.buttonValue = new EventEmitter();
    }
    ngOnInit() {
    }
    sendValue(e) {
        this.localValue = e;
        console.log(this.localValue);
        this.buttonValue.emit(e);
    }
}
ButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.7", type: ButtonGroupComponent, selector: "app-button-group", inputs: { buttons: "buttons", light: "light" }, outputs: { buttonValue: "buttonValue" }, ngImport: i0, template: "<div class=\"da-buttons\">\n    <ng-container *ngFor=\"let button of buttons; let num = index\">\n        <app-button \n            [label]=\"button.label\"\n            [light]=\"light\"\n            [type]=\"button.type\"\n            [iconButton]=\"button.iconButton\"\n            [icon]=\"button.icon\"\n            [iconRight]=\"button.iconRight\"\n            [iconLeft]=\"button.iconLeft\"\n            [value]=\"button.value\"\n            (buttonValue)=\"sendValue($event)\">\n        </app-button>\n    </ng-container>\n</div>", styles: [".da-buttons{width:100%;display:flex;column-gap:24px;row-gap:24px;flex-wrap:wrap;justify-content:center;max-width:1366px}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.ButtonComponent, selector: "app-button", inputs: ["iconButton", "light", "type", "value", "label", "icon", "iconLeft", "iconRight"], outputs: ["buttonValue"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-button-group', template: "<div class=\"da-buttons\">\n    <ng-container *ngFor=\"let button of buttons; let num = index\">\n        <app-button \n            [label]=\"button.label\"\n            [light]=\"light\"\n            [type]=\"button.type\"\n            [iconButton]=\"button.iconButton\"\n            [icon]=\"button.icon\"\n            [iconRight]=\"button.iconRight\"\n            [iconLeft]=\"button.iconLeft\"\n            [value]=\"button.value\"\n            (buttonValue)=\"sendValue($event)\">\n        </app-button>\n    </ng-container>\n</div>", styles: [".da-buttons{width:100%;display:flex;column-gap:24px;row-gap:24px;flex-wrap:wrap;justify-content:center;max-width:1366px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { buttons: [{
                type: Input
            }], light: [{
                type: Input
            }], buttonValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvZWxlbWVudHMvYnV0dG9ucy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvZWxlbWVudHMvYnV0dG9ucy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPL0UsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQjtRQUpTLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDaEMsZUFBVSxHQUFXLFlBQVksQ0FBQztRQUNqQixnQkFBVyxHQUFxQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXpELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBTTtRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2lIQWZVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLGlKQ1BqQywyaEJBY007MkZEUE8sb0JBQW9CO2tCQUxoQyxTQUFTOytCQUNFLGtCQUFrQjswRUFLbkIsT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFVyxXQUFXO3NCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYnV0dG9uLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi1ncm91cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYnV0dG9uczogYW55O1xuICBASW5wdXQoKSBsaWdodDogYm9vbGVhbiA9IGZhbHNlO1xuICBsb2NhbFZhbHVlOiBzdHJpbmcgPSAnbG9jYWxWYWx1ZSc7XG4gIEBPdXRwdXQoKSBwdWJsaWMgYnV0dG9uVmFsdWU6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBzZW5kVmFsdWUoZTogYW55KSB7XG4gICAgdGhpcy5sb2NhbFZhbHVlID0gZTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxvY2FsVmFsdWUpXG4gICAgdGhpcy5idXR0b25WYWx1ZS5lbWl0KGUpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJkYS1idXR0b25zXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGJ1dHRvbnM7IGxldCBudW0gPSBpbmRleFwiPlxuICAgICAgICA8YXBwLWJ1dHRvbiBcbiAgICAgICAgICAgIFtsYWJlbF09XCJidXR0b24ubGFiZWxcIlxuICAgICAgICAgICAgW2xpZ2h0XT1cImxpZ2h0XCJcbiAgICAgICAgICAgIFt0eXBlXT1cImJ1dHRvbi50eXBlXCJcbiAgICAgICAgICAgIFtpY29uQnV0dG9uXT1cImJ1dHRvbi5pY29uQnV0dG9uXCJcbiAgICAgICAgICAgIFtpY29uXT1cImJ1dHRvbi5pY29uXCJcbiAgICAgICAgICAgIFtpY29uUmlnaHRdPVwiYnV0dG9uLmljb25SaWdodFwiXG4gICAgICAgICAgICBbaWNvbkxlZnRdPVwiYnV0dG9uLmljb25MZWZ0XCJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJidXR0b24udmFsdWVcIlxuICAgICAgICAgICAgKGJ1dHRvblZhbHVlKT1cInNlbmRWYWx1ZSgkZXZlbnQpXCI+XG4gICAgICAgIDwvYXBwLWJ1dHRvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PiJdfQ==