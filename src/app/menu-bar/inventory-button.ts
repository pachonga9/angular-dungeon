import { DungeonButton } from './dungeon-button';
import { Router } from '@angular/router';

export class InventoryButton implements DungeonButton {
  constructor(private router: Router) {}

  label = 'Inventory';
  click = () => {
    console.log('Inventory clicked.');
    this.router.navigateByUrl('/inventory-menu');
  };
}
