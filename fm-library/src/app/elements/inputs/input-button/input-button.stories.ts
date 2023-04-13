// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, StoryObj } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import {InputButtonComponent} from './input-button.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleInfo, faCircleXmark, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { MainPipe } from '../../../pipes/pipe.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

export default {
  title: 'inputs/InputButtonComponent',
  component: InputButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule, 
        MainPipe, 
        NgbTooltipModule],
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

type Story = StoryObj<InputButtonComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.200,00',
    unit: '€',
    touched: true,
    light: false,
    info: false,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const DefaultDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.200,00',
    unit: '€',
    touched: true,
    light: true,
    info: false,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
  parameters: {
    backgrounds: {
      default: 'dunkel',
      values: [
        { name: 'dunkel', value: '#203864' },
      ],
    },
  },
};

export const withInfo: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.200,00',
    unit: '€',
    touched: true,
    light: false,
    faCircleInfo: faCircleInfo,
    info: true,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const withInfoDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.200,00',
    unit: '€',
    touched: true,
    light: true,
    faCircleInfo: faCircleInfo,
    info: true,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
  parameters: {
    backgrounds: {
      default: 'dunkel',
      values: [
        { name: 'dunkel', value: '#203864' },
      ],
    },
  },
};

export const warning: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.200,00',
    unit: '€',
    touched: false,
    light: false,
    faCircleExclamation: faCircleExclamation,
    info: false,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const warningDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.200,00',
    unit: '€',
    touched: false,
    light: true,
    faCircleExclamation: faCircleExclamation,
    info: false,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
  parameters: {
    backgrounds: {
      default: 'dunkel',
      values: [
        { name: 'dunkel', value: '#203864' },
      ],
    },
  },
};

export const short: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '90',
    unit: '%',
    touched: true,
    short: true,
    light: false,
    info: false,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const shortDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '90',
    unit: '%',
    touched: true,
    short: true,
    light: true,
    info: false,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
  parameters: {
    backgrounds: {
      default: 'dunkel',
      values: [
        { name: 'dunkel', value: '#203864' },
      ],
    },
  },
};

