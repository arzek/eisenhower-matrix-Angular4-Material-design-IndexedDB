import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'app-no-important-urgent-items',
  templateUrl: '../base.component.html',
  styleUrls: ['./no-important-urgent-items.component.scss']
})
export class NoImportantUrgentItemsComponent extends BaseComponent implements OnInit {
  protected name: any = 'No important and urgent';
  protected table_name: any = 'no_important_urgent';
  protected db_name: any = 'no_important_urgent';
  constructor() {
    super();
  }

  ngOnInit() {
    this.new_item = this.name;
    this.initItem();
  }

}
