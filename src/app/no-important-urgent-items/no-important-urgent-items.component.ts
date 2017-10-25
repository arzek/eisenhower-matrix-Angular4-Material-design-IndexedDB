import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'app-no-important-urgent-items',
  templateUrl: './no-important-urgent-items.component.html',
  styleUrls: ['./no-important-urgent-items.component.scss']
})
export class NoImportantUrgentItemsComponent extends BaseComponent implements OnInit {

  protected table_name: any = 'no_important_urgent';
  protected db_name: any = 'no_important_urgent';
  constructor() {
    super();
  }

  ngOnInit() {
    this.new_item = ' No important and urgent';
    this.initItem();
  }

}
