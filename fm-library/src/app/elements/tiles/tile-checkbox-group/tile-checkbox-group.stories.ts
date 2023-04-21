// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import {TileCheckboxGroupComponent} from './tile-checkbox-group.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleExclamation, faCircleXmark, faHouseCircleCheck, faHouseCircleExclamation, faHouseCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { MainPipe } from '../../../pipes/pipe.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { TileCheckboxComponent } from '../tile-checkbox/tile-checkbox.component';

export default {
  title: 'tiles/TileCheckboxGroupComponent',
  component: TileCheckboxGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TileCheckboxComponent,
      ],
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

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TileCheckboxGroupComponent> = (args: TileCheckboxGroupComponent) => ({
  props: args,
});


const testTiles = [
  {
    'label': 'label1',
    'name': 'name1',
    'state': 'success',
    'icon': faCircleCheck,
    'checked': false,
    'image': faHouseCircleCheck,
    'value': 'value1'
  },
  {
    'label': 'label2',
    'name': 'name2',
    'state': 'warning',
    'icon': faCircleExclamation,
    'checked': false,
    'image': faHouseCircleExclamation,
    'value': 'value2'
  },
  {
    'label': 'label3',
    'name': 'name3',
    'state': 'error',
    'checked': false,
    'icon': faCircleXmark,
    'image': faHouseCircleXmark,
    'value': 'value3'
  }
]
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  tiles: testTiles
};
