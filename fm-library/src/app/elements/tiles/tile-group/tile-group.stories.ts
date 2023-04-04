// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import {TileGroupComponent} from './tile-group.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faHouseCircleCheck, faHouseCircleExclamation, faHouseCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { MainPipe } from '../../../pipes/pipe.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { TileComponent } from '../tile/tile.component';

export default {
  title: 'tiles/TileGroupComponent',
  component: TileGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TileComponent,
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
const Template: Story<TileGroupComponent> = (args: TileGroupComponent) => ({
  props: args,
});


const testTiles = [
  {
    'label': 'label1',
    'name': 'name',
    'state': 'success',
    'checked': false,
    'image': faHouseCircleCheck,
    'value': 'value1'
  },
  {
    'label': 'label2',
    'name': 'name',
    'state': 'warning',
    'checked': false,
    'image': faHouseCircleExclamation,
    'value': 'value2'
  },
  {
    'label': 'label3',
    'name': 'name',
    'state': 'error',
    'checked': false,
    'image': faHouseCircleXmark,
    'value': 'value3'
  }
]
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  tiles: testTiles
};
