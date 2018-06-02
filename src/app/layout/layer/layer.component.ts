
import {Component, EventEmitter, Input, OnInit, Output, ViewChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor() { }

  ngOnInit() {
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }


  showCollapsedSider($event) {
    this.isCollapsed = $event;
  }
  /**
   * 设置tabs
   * @param $event
   */




}
