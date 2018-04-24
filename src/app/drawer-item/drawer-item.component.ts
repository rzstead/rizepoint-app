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
  @ContentChildren(DrawerItemComponent) contentChildren: DrawerItemComponent[];
  @Input() title;


  public getTransform(): string {
    return this.toggled ? 'rotate(180deg)' : 'rotate(0deg)';
  }

  public getActive(): string {
    return this.toggled ? '#FFF' : '#999';
  }

  public getVisibility(): string {
    return this.toggled ? '{opacity: 1;}{visibility:visible;}' : '{opacity: 0;}{visibility:hidden;}';
  }

  public getFilter(): string {
    return this.toggled ? 'brightness(100%)' : 'brightness(60%)';
  }

  public toggleTab() {
    this.toggled = !this.toggled;
    if (!this.toggled) {
      this.contentChildren.forEach(child => {
        console.log(child)
          child.toggleTab();
      });
    }

  }

  public hasChildren() {
    return this.contentChildren.length > 0;
  }

}
