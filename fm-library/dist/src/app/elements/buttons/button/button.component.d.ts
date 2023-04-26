import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponent implements OnInit {
    iconButton: boolean;
    light: boolean;
    type: string;
    value: string;
    label: string;
    icon: any;
    iconLeft: any;
    iconRight: any;
    buttonValue: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    getValue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "app-button", never, { "iconButton": "iconButton"; "light": "light"; "type": "type"; "value": "value"; "label": "label"; "icon": "icon"; "iconLeft": "iconLeft"; "iconRight": "iconRight"; }, { "buttonValue": "buttonValue"; }, never, never, false>;
}
