import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImportantUrgentItemsComponent } from './important-urgent-items/important-urgent-items.component';
import { NoImportantUrgentItemsComponent } from './no-important-urgent-items/no-important-urgent-items.component';
import { ImportantNoUrgentItemsComponent } from './important-no-urgent-items/important-no-urgent-items.component';
import { NoImportantNoUrgentItemsComponent } from './no-important-no-urgent-items/no-important-no-urgent-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportantUrgentItemsComponent,
    NoImportantUrgentItemsComponent,
    ImportantNoUrgentItemsComponent,
    NoImportantNoUrgentItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
