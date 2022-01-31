import { Injectable } from '@angular/core';
import { ButtonMap } from '../menu-bar/button-map';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Injectable({
  providedIn: 'root',
})

////this will pull the array of buttons from the menu-bar component
export class ButtonFinderService {
  constructor(private mbc: MenuBarComponent) {}

  // get giveButtonArray(): ButtonMap[] {
  //   return this.mbc.buttonMap;
  // }

  get mainMenuButton() {
    let mmb = this.mbc.buttonMap[0];
    return mmb;
  }

  get inventoryMenuButton() {
    let imb = this.mbc.buttonMap[1];
    return imb;
  }

  get goForwardButton() {
    let gfb = this.mbc.buttonMap[2];
    return gfb;
  }

  get fightButton() {
    let fb = this.mbc.buttonMap[3];
    return fb;
  }
}
