// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import {InputComponent} from './input.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleInfo, faCircleXmark, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { MainPipe } from '../../../pipes/pipe.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

export default {
  title: 'inputs/InputComponent',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule, 
        MainPipe, 
        NgbTooltipModule,
        AngularSvgIconModule.forRoot(),
        HttpClientModule],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
            iconLibrary.addIcons(faCircleCheck);
            iconLibrary.addIcons(faCircleXmark);
            iconLibrary.addIcons(faCircleExclamation);
            iconLibrary.addIcons(faCircleInfo);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  label: 'das Label',
  name: 'dieId',
  value: '',
  type: 'text',
  placeholder: '0,00',
  unit: '€',
  touched: false,
  error: false,
  light: false,
  errorText: 'die Fehlermeldung',
  info: false,
  infoText: 'info Text',
  infoHeader: 'info Überschrift',
};
