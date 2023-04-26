import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonGroupComponent implements OnInit {
    buttons: any;
    light: boolean;
    localValue: string;
    buttonValue: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    sendValue(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonGroupComponent, "app-button-group", never, { "buttons": "buttons"; "light": "light"; }, { "buttonValue": "buttonValue"; }, never, never, false>;
}
