// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import { StarRatingModule } from 'angular-star-rating';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, fas } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { MainPipe } from '../../../pipes/pipe.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { TileRatingComponent } from './tile-rating.component';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';

export default {
  title: 'tiles/TileRatingComponent',
  component: TileRatingComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule, 
        MainPipe, 
        StarRatingModule.forRoot(),
        AngularSvgIconModule.forRoot(),
        HttpClientModule
      ],
      declarations: [
        InfoButtonComponent,
      ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
            iconLibrary.addIconPacks(fas);
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
const Template: Story<TileRatingComponent> = (args: TileRatingComponent) => ({
  props: args,
});

export const Default4Stars = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default4Stars.args = {
  label: 'das Label',
  name: 'name',
  stars: 4,
  info: true,
};

export const Default5Stars = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default5Stars.args = {
  label: 'das Label',
  name: 'name',
  stars: 5,
  info: true,
};
