import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'app-no-important-no-urgent-items',
  templateUrl: './no-important-no-urgent-items.component.html',
  styleUrls: ['./no-important-no-urgent-items.component.scss']
})
export class NoImportantNoUrgentItemsComponent extends BaseComponent implements OnInit {

  protected table_name: any = 'no_important_no_urgent';
  protected db_name: any = 'no_important_no_urgent';
  constructor() {
    super();
  }

  ngOnInit() {
    this.new_item = ' No important and no urgent';
    this.initItem();
  }

}
