import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-text',
  templateUrl: './tile-text.component.html',
  styleUrls: ['./tile-text.component.scss']
})
export class TileTextComponent implements OnInit {
  @Input() label: string = 'label';
  @Input() light: boolean = false;
  @Input() large: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
