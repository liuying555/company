import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {

  @Input() isCollapsed;
  constructor() { }

  ngOnInit() {
  }

}
