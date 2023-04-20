// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, StoryObj } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import {InfoButtonComponent} from './info-button.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk} from '@fortawesome/free-regular-svg-icons';
import { APP_INITIALIZER } from '@angular/core';

export default {
  title: 'buttons/InfoButtonComponent',
  component: InfoButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
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

type Story = StoryObj<InfoButtonComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    light: false,
  },
};

export const DefaultDark: Story = {
  args: {
    light: true,
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
