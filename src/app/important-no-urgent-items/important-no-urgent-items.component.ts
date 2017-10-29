import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'app-important-no-urgent-items',
  templateUrl: '../base.component.html',
  styleUrls: ['./important-no-urgent-items.component.scss']
})
export class ImportantNoUrgentItemsComponent extends BaseComponent implements OnInit {
  protected name: any = 'Important and no urgent';
  protected table_name: any = 'important_no_urgent';
  protected db_name: any = 'important_no_urgent';
  constructor() {
    super();
  }
  ngOnInit() {
    this.new_item = this.name;
    this.initItem();

  }

}
