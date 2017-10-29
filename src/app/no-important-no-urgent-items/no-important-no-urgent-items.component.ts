import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'app-no-important-no-urgent-items',
  templateUrl: '../base.component.html',
  styleUrls: ['./no-important-no-urgent-items.component.scss']
})
export class NoImportantNoUrgentItemsComponent extends BaseComponent implements OnInit {
  protected name: any = 'No important and no urgent';
  protected table_name: any = 'no_important_no_urgent';
  protected db_name: any = 'no_important_no_urgent';
  constructor() {
    super();
  }

  ngOnInit() {
    this.new_item = this.name;
    this.initItem();
  }

}
