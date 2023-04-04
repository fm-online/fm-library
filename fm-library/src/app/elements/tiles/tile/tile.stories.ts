// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import {TileComponent} from './tile.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleExclamation, faCircleXmark, faHouseCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { MainPipe } from '../../../pipes/pipe.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'tiles/TileComponent',
  component: TileComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule, 
        MainPipe, 
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
const Template: Story<TileComponent> = (args: TileComponent) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  label: 'das Label',
  image: faHouseCircleXmark,
  checked: false,
  name: 'name',
  value: 'the value',
  state: 'success',
  localValue: ''
};
