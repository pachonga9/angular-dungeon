import { Injectable } from '@angular/core';
import { ButtonFinderService } from './button-finder.service';

@Injectable({
  providedIn: 'root',
})
export class ButtonToggleService {
  constructor(private bfs: ButtonFinderService) {}

  newButtonMap = []; //return this as an observable for menu bar component to subscribe to.

  mainMenuButton = this.bfs.mainMenuButton.display;
  inventoryMenuButton = this.bfs.inventoryMenuButton.display;
  fightButton = this.bfs.fightButton;

  // toggleDisplay(): void {
  //   let btnArr = this.bfs.giveButtonArray;
  //   console.log(`This is from Button Toggle Service: ${btnArr}`);
  // }

  ngOnInit() {
    // this.toggleDisplay();
  }

  /////pretend this came from another module
  currentLocation = 2;
  //////////////////////////////////////////

  toggleDisplay() {
    if (this.currentLocation === 2) {
      this.fightButton.display != this.fightButton.display;
    }
  }
}
