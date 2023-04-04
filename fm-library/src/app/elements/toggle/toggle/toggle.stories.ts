// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import {ToggleComponent} from './toggle.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';

export default {
  title: 'switches/ToggleComponent',
  component: ToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
            iconLibrary.addIcons(faCircleCheck);
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
const Template: Story<ToggleComponent> = (args: ToggleComponent) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  label1: 'Ja',
  label2: 'Nein',
  value1: 'true',
  value2: 'false',
  name: 'name',
  light: false,
};

