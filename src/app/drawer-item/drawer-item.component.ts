import { Component, OnInit, ViewChildren, ContentChildren, QueryList, Input } from '@angular/core';
import { trigger, transition, query, style, group, animate } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'drawer-item',
  templateUrl: './drawer-item.component.html',
  styleUrls: ['./drawer-item.component.scss'],
  animations: [
    trigger('slideOpenClosed', [
      transition(':enter', [
        query('p, img', style({ opacity: 0, height: '0px' })),
        style({ height: '0px' }),
        group([
          query('p, i', [
            animate('.1s ease-in')
          ]),
          animate('.2s linear')
        ]),
      ]),
      transition(':leave', [
        group([
          query('p, i', [
            animate('.1s ease-in', style({ opacity: 0, height: '0px' }))
          ]),
          animate('.2s ease-in', style({ height: '0px' }))
        ])
      ])
    ])
  ]
})

export class DrawerItemComponent {

  protected toggled: boolean;
  @ContentChildren(DrawerItemComponent) contentChildren: DrawerItemComponent[];
  @Input() title: string;
  @Input() image: string;


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
  }

  public hasChildren() {
    return this.contentChildren.length > 1;
  }

}
