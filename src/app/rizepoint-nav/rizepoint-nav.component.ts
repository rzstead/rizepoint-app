import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, query, group } from '@angular/animations'

@Component({
  selector: 'rizepoint-nav',
  templateUrl: './rizepoint-nav.component.html',
  styleUrls: ['./rizepoint-nav.component.scss'],
  animations: [
    trigger('slideOpenClosed', [
      transition(':enter', [
        query('p, img', style({ opacity: 0, height: '0px' })),
        style({ height: '0px' }),
        group([
          query('p, img', [
            animate('.1s ease-in')
          ]),
          animate('.2s linear')
        ]),
      ]),
      transition(':leave', [
        group([
          query('p, img', [
            animate('.1s ease-in', style({ opacity: 0, height: '0px' }))
          ]),
          animate('.2s ease-in', style({ height: '0px' }))
        ])
      ])
    ])
  ]
})
export class RizepointNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public toggled: { [id: string]: boolean } = {};

  public toggleTab(id: string) {
    if (this.toggled[id]) {
      this.toggled[id] = !this.toggled[id];
    } else {
      this.toggled[id] = true;
    }
  }

  public getToggled(id: string): boolean {
    return this.toggled[id];
  }

  public getTransform(id: string): string {
    return this.getToggled(id) ? 'rotate(180deg)' : 'rotate(0deg)';
  }

  public getFilter(id: string): string {
    return this.getToggled(id) ? 'brightness(100%)' : 'brightness(60%)';
  }

  public getActive(id: string): string {
    return this.getToggled(id) ? '#FFF' : '#999';
  }

  public getVisibility(id: string): string {
    return this.getToggled(id) ? '{opacity: 1;}{visibility:visible;}' : '{opacity: 0;}{visibility:hidden;}';
  }


}
