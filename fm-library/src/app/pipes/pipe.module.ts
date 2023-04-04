import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {FillPipe} from "./fill.pipe";
import { SafeHtmlPipe } from './safeHtml.pipe';

@NgModule({
  declarations:[FillPipe, SafeHtmlPipe], 
  imports:[CommonModule],
  exports:[FillPipe, SafeHtmlPipe] 
})

export class MainPipe{}