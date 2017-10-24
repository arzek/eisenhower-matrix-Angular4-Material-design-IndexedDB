import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'app-important-urgent-items',
  templateUrl: './important-urgent-items.component.html',
  styleUrls: ['./important-urgent-items.component.scss']
})
export class ImportantUrgentItemsComponent extends BaseComponent implements OnInit {

  protected table_name: any = 'important_urgent';
  protected db_name: any = 'important_urgent';
  constructor() {
    super();
  }
  ngOnInit() {
    this.new_item = 'Important and urgent';
    this.initItem();

  }


}
