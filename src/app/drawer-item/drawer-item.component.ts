import { Component, OnInit, ViewChildren, ContentChildren, QueryList, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DrawerHeaderComponent } from '../drawer-header/drawer-header.component';

@Component({
  selector: 'drawer-item',
  templateUrl: './drawer-item.component.html',
  styleUrls: ['./drawer-item.component.scss']
})

export class DrawerItemComponent {

  protected toggled: boolean;
  @Input() title;


  public getTransform(id: string): string {
    return this.toggled ? 'rotate(180deg)' : 'rotate(0deg)';
  }

  public getActive(id: string): string {
    return this.toggled ? '#FFF' : '#999';
  }

  public getVisibility(id: string): string {
    return this.toggled ? '{opacity: 1;}{visibility:visible;}' : '{opacity: 0;}{visibility:hidden;}';
  }

  public getFilter(id: string): string {
    return this.toggled ? 'brightness(100%)' : 'brightness(60%)';
  }

  public toggleTab() {
    this.toggled = !this.toggled;
  }

}
