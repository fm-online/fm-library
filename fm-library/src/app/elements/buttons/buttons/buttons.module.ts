import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from '../button/button.component';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { InfoButtonComponent } from '../info-button/info-button.component';

const DECLARATIONS = [ButtonComponent, ButtonGroupComponent, InfoButtonComponent];
const EXPORTS = [DECLARATIONS];

@NgModule({
  declarations: [DECLARATIONS],
  exports: [EXPORTS],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ButtonsModule { }
