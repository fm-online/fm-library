import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() iconButton: boolean = false;
  @Input() light: boolean = true;
  @Input() type: string = '';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() icon: any;
  @Input() iconLeft: any;
  @Input() iconRight: any;
  @Output() public buttonValue:EventEmitter<any> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  getValue() {
    this.buttonValue.emit(this.type);
  }

}
