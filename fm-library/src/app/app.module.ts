import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { StarRatingModule } from 'angular-star-rating';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

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
import { ButtonComponent } from './elements/buttons/button/button.component';
import { ButtonGroupComponent } from './elements/buttons/button-group/button-group.component';
import { ToggleTristateComponent } from './elements/toggle/toggle-tristate/toggle-tristate.component';
import { TileCheckboxComponent } from './elements/tiles/tile-checkbox/tile-checkbox.component';
import { TileCheckboxGroupComponent } from './elements/tiles/tile-checkbox-group/tile-checkbox-group.component';
import { TileRatingComponent } from './elements/tiles/tile-rating/tile-rating.component';
import { InfoButtonComponent } from './elements/buttons/info-button/info-button.component';
import { DropdownComponent } from './elements/inputs/dropdown/dropdown.component';

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
    ButtonComponent,
    ButtonGroupComponent,
    ToggleTristateComponent,
    TileCheckboxComponent,
    TileCheckboxGroupComponent,
    TileRatingComponent,
    InfoButtonComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StarRatingModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule,
    MatDatepickerModule,
    AngularSvgIconModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
