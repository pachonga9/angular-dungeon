import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonMap } from './button-map';
import { FightButton } from './fight-button';
import { fleeButton } from './flee-button';
import { GoForwardButton } from './go-forward-button';
import { InventoryButton } from './inventory-button';
import { MainMenuButton } from './main-menu-button';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  buttonMap: ButtonMap[] = [];
  constructor(private router: Router) {
    ///// just move all the button stuff into a service, and return that to this...
    console.log(this.buttonMap);
    const mainMenuButtonMap = {
      display: true,
      button: new MainMenuButton(this.router),
    };
    this.buttonMap.push(mainMenuButtonMap);

    const inventoryButtonMap = {
      display: true,
      button: new InventoryButton(this.router),
    };
    this.buttonMap.push(inventoryButtonMap);

    const goForwardButtonMap = {
      display: true,
      button: new GoForwardButton(),
    };
    this.buttonMap.push(goForwardButtonMap);

    const fightButtonMap = {
      display: true,
      button: new FightButton(),
    };
    this.buttonMap.push(fightButtonMap);

    const fleeButtonMap = {
      display: true,
      button: new fleeButton(),
    };
    this.buttonMap.push(fleeButtonMap);
  }

  ngOnInit(): void {}
}
