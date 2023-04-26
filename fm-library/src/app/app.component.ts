import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fm-library';

  testItems = [
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
}
