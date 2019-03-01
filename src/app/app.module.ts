import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListViewComponent } from './views/list-view/list-view.component';
import { ItemViewComponent } from './views/item-view/item-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
