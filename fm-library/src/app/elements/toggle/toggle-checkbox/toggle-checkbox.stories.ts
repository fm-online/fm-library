// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {ToggleCheckboxComponent} from './toggle-checkbox.component';

export default {
  title: 'switches/ToggleCheckboxComponent',
  component: ToggleCheckboxComponent,
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ToggleCheckboxComponent> = (args: ToggleCheckboxComponent) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  label: 'das Label',
  checked: true,
  light: false
};

