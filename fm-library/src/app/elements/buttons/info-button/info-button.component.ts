import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.scss']
})
export class InfoButtonComponent implements OnInit {
  @Input() light: boolean = false;
  @Output() public infoPressed:EventEmitter<any> = new EventEmitter<boolean>();
  faCircleInfo = faCircleInfo;
  
  constructor() { }

  ngOnInit(): void {
  }

  getInfo() {
    console.log("test")
    this.infoPressed.emit(true);
  }

}
