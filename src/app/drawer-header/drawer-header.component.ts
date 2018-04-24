import { Component, OnInit, Input, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { trigger, transition, query, style, group, animate } from '@angular/animations';
import { DrawerItemComponent } from '../drawer-item/drawer-item.component';

@Component({
  selector: 'drawer-header',
  templateUrl: './drawer-header.component.html',
  styleUrls: ['./drawer-header.component.scss'],
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

export class DrawerHeaderComponent extends DrawerItemComponent{
  
  @Input() headerTitle: string;
  @Input() headerImage: string;
  constructor(){
    super();
  }

}
