import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { StarRatingModule } from 'angular-star-rating';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import localeDE from '@angular/common/locales/de';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterComponent } from './elements/counter/counter.component';
import { InputComponent } from './elements/inputs/input/input.component';
import { TileComponent } from './elements/tiles/tile/tile.component';
import { TileGroupComponent } from './elements/tiles/tile-group/tile-group.component';
import { ToggleComponent } from './elements/toggle/toggle/toggle.component';
import { ToggleCheckboxComponent } from './elements/toggle/toggle-checkbox/toggle-checkbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TileTextComponent } from './elements/text/tile-text/tile-text.component';
import { InputButtonComponent } from './elements/inputs/input-button/input-button.component';
import { ToggleTristateComponent } from './elements/toggle/toggle-tristate/toggle-tristate.component';
import { TileCheckboxComponent } from './elements/tiles/tile-checkbox/tile-checkbox.component';
import { TileCheckboxGroupComponent } from './elements/tiles/tile-checkbox-group/tile-checkbox-group.component';
import { TileRatingComponent } from './elements/tiles/tile-rating/tile-rating.component';
import { DropdownComponent } from './elements/inputs/dropdown/dropdown.component';
import { InputDateComponent } from './elements/inputs/input-date/input-date.component';

import { ButtonsModule } from './elements/buttons/buttons/buttons.module';

registerLocaleData(localeDE);

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    InputComponent,
    TileComponent,
    TileGroupComponent,
    ToggleComponent,
    ToggleCheckboxComponent,
    TileTextComponent,
    InputButtonComponent,
    ToggleTristateComponent,
    TileCheckboxComponent,
    TileCheckboxGroupComponent,
    TileRatingComponent,
    DropdownComponent,
    InputDateComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    StarRatingModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule, 
    MatDatepickerModule,
    MatInputModule,
    AngularSvgIconModule.forRoot(),
    NgbModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
