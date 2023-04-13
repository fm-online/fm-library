import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttons: any;
  @Input() light: boolean = false;
  localValue: string = 'localValue';
  @Output() public buttonValue:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendValue(e: any) {
    this.localValue = e;
    console.log(this.localValue)
    this.buttonValue.emit(e);
  }

}
