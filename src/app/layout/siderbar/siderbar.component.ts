import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {

  @Input() isCollapsed;
  menus: any;
  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.menuList().subscribe((result: any ) => {
      this.menus = result.menu;
    });
  }

}
