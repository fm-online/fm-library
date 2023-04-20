// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, StoryObj } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import {DropdownComponent} from './dropdown.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleInfo, faCircleXmark, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { MainPipe } from '../../../pipes/pipe.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'inputs/DropdownComponent',
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule, 
        MainPipe, 
        MatSelectModule,
        BrowserAnimationsModule,
        NgbTooltipModule
      ],
      declarations: [
        InfoButtonComponent,
      ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
            iconLibrary.addIcons();
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<DropdownComponent>;

const testItems = [
  {
    'value': 'value1',
    'text': 'Option 1'
  },
  {
    'value': 'value2',
    'text': 'Option 2'
  },
  {
    'value': 'value3',
    'text': 'Option 3'
  },
  {
    'value': 'value4',
    'text': 'Option 4'
  },
  {
    'value': 'value4',
    'text': 'Option 4'
  },
  {
    'value': 'value4',
    'text': 'Option 4'
  }
]

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    name: 'id',
    placeholder: 'Bitte wählen',
    light: false,
    selectItems: testItems,
    info: false,
  },
};

// export const DefaultDark: Story = {
//   args: {
//     label: 'das Label',
//     name: 'id',
//     value: '',
//     type: 'text',
//     placeholder: '0,00',
//     unit: '€',
//     touched: false,
//     error: false,
//     light: true,
//     errorText: 'die Fehlermeldung',
//     info: false,
//     infoText: 'info Text',
//     infoHeader: 'info Überschrift',
//   },
//   parameters: {
//     backgrounds: {
//       default: 'dunkel',
//       values: [
//         { name: 'dunkel', value: '#203864' },
//       ],
//     },
//   },
// };

// export const withInfo: Story = {
//   args: {
//     label: 'das Label',
//     name: 'id',
//     value: '',
//     type: 'text',
//     placeholder: '0,00',
//     unit: '€',
//     touched: false,
//     error: false,
//     light: false,
//     faCircleInfo: faCircleInfo,
//     errorText: 'die Fehlermeldung',
//     info: true,
//     infoText: 'info Text',
//     infoHeader: 'info Überschrift',
//   },
// };

// export const withInfoDark: Story = {
//   args: {
//     label: 'das Label',
//     name: 'id',
//     value: '',
//     type: 'text',
//     placeholder: '0,00',
//     unit: '€',
//     touched: false,
//     error: false,
//     light: true,
//     faCircleInfo: faCircleInfo,
//     errorText: 'die Fehlermeldung',
//     info: true,
//     infoText: 'info Text',
//     infoHeader: 'info Überschrift',
//   },
//   parameters: {
//     backgrounds: {
//       default: 'dunkel',
//       values: [
//         { name: 'dunkel', value: '#203864' },
//       ],
//     },
//   },
// };

// export const error: Story = {
//   args: {
//     label: 'das Label',
//     name: 'id',
//     value: 'falscher input',
//     type: 'text',
//     placeholder: '0,00',
//     unit: '€',
//     touched: true,
//     error: true,
//     light: false,
//     faCircleExclamation: faCircleExclamation,
//     faCircleXmark: faCircleXmark,
//     errorText: 'die Fehlermeldung',
//     info: false,
//     infoText: 'info Text',
//     infoHeader: 'info Überschrift',
//   },
// };

// export const errorDark: Story = {
//   args: {
//     label: 'das Label',
//     name: 'id',
//     value: 'falscher input',
//     type: 'text',
//     placeholder: '0,00',
//     unit: '€',
//     touched: true,
//     error: true,
//     light: true,
//     faCircleExclamation: faCircleExclamation,
//     faCircleXmark: faCircleXmark,
//     errorText: 'die Fehlermeldung',
//     info: false,
//     infoText: 'info Text',
//     infoHeader: 'info Überschrift',
//   },
//   parameters: {
//     backgrounds: {
//       default: 'dunkel',
//       values: [
//         { name: 'dunkel', value: '#203864' },
//       ],
//     },
//   },
// };

// export const success: Story = {
//   args: {
//     label: 'das Label',
//     name: 'id',
//     value: '1.100,00',
//     type: 'text',
//     placeholder: '0,00',
//     unit: '€',
//     touched: true,
//     error: false,
//     light: false,
//     faCircleCheck: faCircleCheck,
//     errorText: 'die Fehlermeldung',
//     info: false,
//     infoText: 'info Text',
//     infoHeader: 'info Überschrift',
//   },
// };

// export const successDark: Story = {
//   args: {
//     label: 'das Label',
//     name: 'id',
//     value: '1.100,00',
//     type: 'text',
//     placeholder: '0,00',
//     unit: '€',
//     touched: true,
//     error: false,
//     light: true,
//     faCircleCheck: faCircleCheck,
//     errorText: 'die Fehlermeldung',
//     info: false,
//     infoText: 'info Text',
//     infoHeader: 'info Überschrift',
//   },
//   parameters: {
//     backgrounds: {
//       default: 'dunkel',
//       values: [
//         { name: 'dunkel', value: '#203864' },
//       ],
//     },
//   },
// };

