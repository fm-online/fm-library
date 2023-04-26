import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../button/button.component';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { InfoButtonComponent } from '../info-button/info-button.component';
import * as i0 from "@angular/core";
const DECLARATIONS = [ButtonComponent, ButtonGroupComponent, InfoButtonComponent];
const EXPORTS = [DECLARATIONS];
export class ButtonsModule {
}
ButtonsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ButtonsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.7", ngImport: i0, type: ButtonsModule, declarations: [ButtonComponent, ButtonGroupComponent, InfoButtonComponent], imports: [CommonModule,
        FontAwesomeModule], exports: [ButtonComponent, ButtonGroupComponent, InfoButtonComponent] });
ButtonsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ButtonsModule, imports: [CommonModule,
        FontAwesomeModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.7", ngImport: i0, type: ButtonsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DECLARATIONS],
                    exports: [EXPORTS],
                    imports: [
                        CommonModule,
                        FontAwesomeModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2VsZW1lbnRzL2J1dHRvbnMvYnV0dG9ucy9idXR0b25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBRTNFLE1BQU0sWUFBWSxHQUFHLENBQUMsZUFBZSxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDbEYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQVUvQixNQUFNLE9BQU8sYUFBYTs7MEdBQWIsYUFBYTsyR0FBYixhQUFhLGlCQVhKLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsYUFPNUUsWUFBWTtRQUNaLGlCQUFpQixhQVJDLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUI7MkdBV25FLGFBQWEsWUFKdEIsWUFBWTtRQUNaLGlCQUFpQjsyRkFHUixhQUFhO2tCQVJ6QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDNUIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNsQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixpQkFBaUI7cUJBQ2xCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmZvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vaW5mby1idXR0b24vaW5mby1idXR0b24uY29tcG9uZW50JztcblxuY29uc3QgREVDTEFSQVRJT05TID0gW0J1dHRvbkNvbXBvbmVudCwgQnV0dG9uR3JvdXBDb21wb25lbnQsIEluZm9CdXR0b25Db21wb25lbnRdO1xuY29uc3QgRVhQT1JUUyA9IFtERUNMQVJBVElPTlNdO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtERUNMQVJBVElPTlNdLFxuICBleHBvcnRzOiBbRVhQT1JUU10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25zTW9kdWxlIHsgfVxuIl19