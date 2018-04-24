import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RizepointNavComponent } from './rizepoint-nav/rizepoint-nav.component';
import { DrawerHeaderComponent } from './drawer-header/drawer-header.component';
import { DrawerItemComponent } from './drawer-item/drawer-item.component'


@NgModule({
  declarations: [
    AppComponent,
    RizepointNavComponent,
    DrawerHeaderComponent,
    DrawerItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
