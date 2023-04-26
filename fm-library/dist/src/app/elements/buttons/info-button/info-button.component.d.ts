import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class InfoButtonComponent implements OnInit {
    light: boolean;
    infoPressed: EventEmitter<any>;
    faCircleInfo: import("@fortawesome/fontawesome-common-types").IconDefinition;
    constructor();
    ngOnInit(): void;
    getInfo(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InfoButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InfoButtonComponent, "app-info-button", never, { "light": "light"; }, { "infoPressed": "infoPressed"; }, never, never, false>;
}
