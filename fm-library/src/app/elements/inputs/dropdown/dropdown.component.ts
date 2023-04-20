import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() selectItems!: any;
  @Input() light: boolean = false;
  @Input() info: boolean = false;
  success: boolean = false;
  faCheck = faCircleCheck;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  constructor() { }

  ngOnInit(): void {
  }

  getValue(e: any) {
    console.log('change', e);
    this.success = true;
  }

  getInfo(e: boolean) {
    console.log(e)
  }

}
