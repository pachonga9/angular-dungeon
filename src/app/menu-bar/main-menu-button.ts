import { DungeonButton } from './dungeon-button';
import { Router } from '@angular/router';

export class MainMenuButton implements DungeonButton {
  constructor(private router: Router) {}

  label = 'Main Menu';
  click = () => {
    console.log('Main Menu clicked.');
    this.router.navigateByUrl('/main-menu');
  };
}
