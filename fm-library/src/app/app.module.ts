import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularSvgIconModule } from 'angular-svg-icon';

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

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    InputComponent,
    TileComponent,
    TileGroupComponent,
    ToggleComponent,
    ToggleCheckboxComponent,
    TileTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
